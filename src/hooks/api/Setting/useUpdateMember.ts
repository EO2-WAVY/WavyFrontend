import { useSWRConfig } from "swr";
import { get, put } from "utils/api/client";

import { key as memberKey } from "hooks/api/useCheckCurrentMember";
import useNotification from "hooks/Common/useNotification";

const useUpdateMember = () => {
    const { addNotification } = useNotification();
    const { mutate } = useSWRConfig();

    const putMember = async (mbrNickname: string, s3Objectname?: string) => {
        const requestBody: IPutUpdateMemberRequest = {
            mbrNickname: mbrNickname,
        };
        if (s3Objectname) requestBody.profileImageUrl = s3Objectname;

        const response = await put<IPutUpdateMember>("/members", requestBody);

        if (response.ok) {
            addNotification({
                title: "성공적으로 수정하였습니다",
                description: "",
            });
            mutate(memberKey);
        } else {
            addNotification({
                title: "수정에 실패하였습니다",
                description: "",
            });
        }
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
