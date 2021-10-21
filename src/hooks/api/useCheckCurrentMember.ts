import { useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "utils/api/fetch";
import useCurrentUser from "hooks/Common/useCurrentUser";
import removeToken from "utils/Auth/removeToken";


export interface Member {
    mbrSeq: string;
    mbrDeleted: boolean;
    mbrEmail: string;
    mbrNickname: string;
    mbrKakaoSeq: number;
    profileImageUrl: string;
    creatorSeq: number;
    createdDate: string;
    marketingConsentCode: string;
    certificationMethodCode: string;
    privacyConsentCode: string;
    updatedDate: string;
    updaterSeq: number;
    videoOptionCode: string;
}

export const key = "/members/me";

const useCheckCurrentMember = () => {
    const { setCurrentUser } = useCurrentUser();
    const { data } = useSWR<IGetMember>(key, fetcher);

    useEffect(() => {
        if (data?.statusCode === 403) {
            removeToken();
            setCurrentUser(null);
            return;
        }

        if (!data?.member) return;
        setCurrentUser(data.member);
    }, [data?.member, data?.statusCode, setCurrentUser]);
};

export default useCheckCurrentMember;

interface IGetMember {
    ok: true;
    member: Member;
    statusCode: number;
}
