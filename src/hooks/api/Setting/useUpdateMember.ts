import useNotification from "hooks/Common/useNotification";
import { get, put } from "utils/api/client";

const useUpdateMember = () => {
    const { addNotification } = useNotification();

    const putMember = async (mbrNickname: string, s3Objectname?: string) => {
        const requestBody: IPutUpdateMemberRequest = {
            mbrNickname: mbrNickname,
        };
        if (s3Objectname) requestBody.profileImageUrl = s3Objectname;

        const response = await put<IPutUpdateMember>("/members", requestBody);

        if (!response.ok)
            addNotification({
                title: "수정에 실패하였습니다",
                description: "",
            });
        console.log(response);
    };

    const updateMember = async (
        nickname: string,
        profileImage: File | null
    ) => {
        if (!profileImage) {
            putMember(nickname);
            return;
        }

        const ext = profileImage.type.split("/")[1];
        const s3Url = await get<IGetMemberS3SignedUrl>(
            "/members/image/s3-upload-signed-url",
            {
                params: { ext },
            }
        );

        console.log(s3Url);
        const xhr = new XMLHttpRequest();
        xhr.open("PUT", s3Url.signedUrl);
        xhr.send(profileImage);

        const handleSended = async () => {
            putMember(nickname, s3Url.s3ObjectName);
        };

        xhr.addEventListener("load", handleSended);
    };

    return { updateMember };
};

export default useUpdateMember;

interface IGetMemberS3SignedUrl {
    ok: boolean;
    signedUrl: string;
    s3ObjectName: string;
}

interface IPutUpdateMember {
    ok: boolean;
}

interface IPutUpdateMemberRequest {
    mbrNickname: string;
    profileImageUrl?: string;
}
