import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { currentUserState } from "store/Auth";
import useSWR from "swr";
import { fetcher } from "utils/api/fetch";
// import removeToken from "utils/Auth/removeToken";

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

const memberKey = "/members/me";

const useCheckCurrentMember = () => {
    const setCurrentUser = useSetRecoilState(currentUserState);
    const { data } = useSWR<GetMember>(memberKey, fetcher);

    useEffect(() => {
        if (data?.statusCode === 403) {
            // removeToken();
            setCurrentUser(null);
            console.log("ERROR");
            return;
        }

        if (!data?.member) return;
        setCurrentUser(data.member);
    }, [data?.member, data?.statusCode, setCurrentUser]);
};

export default useCheckCurrentMember;

interface GetMember {
    ok: true;
    member: Member;
    statusCode: number;
}
