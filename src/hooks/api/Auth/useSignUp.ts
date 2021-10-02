import { gcMarketingConsent, gcPrivacyConsent } from "constants/groupCode";
import { UserInfo } from "pages/SignUpTerm";
import { useHistory } from "react-router";
import { useSetRecoilState } from "recoil";
import { currentUserState } from "store/Auth";
import { post, updateInstanceInterceptorsRequest } from "utils/api/client";
import saveToken from "utils/Auth/saveToken";
import { Member } from "../useGetCurrentMember";

interface useSignUpProps {
    userInfo: UserInfo;
    checks: boolean[];
}

const useSignUp = ({ userInfo, checks }: useSignUpProps) => {
    const setCurrentUser = useSetRecoilState(currentUserState);
    const history = useHistory();

    const signUp = async () => {
        const response = await post<SignUpUser>("/members/signup", {
            mbrEmail: userInfo.email,
            mbrNickname: userInfo.nickname,
            certificationMethodCode: "30002",
            profileImageUrl:
                "https://user-images.githubusercontent.com/26461307/135726385-309594b0-c6d0-4caf-846d-97ca6876dda2.jpg",
            privacyConsentCode: gcPrivacyConsent(checks[1]),
            marketingConsentCode: gcMarketingConsent(checks[2]),
            videoOptionCode: "40001",
        });

        saveToken(response.token);
        updateInstanceInterceptorsRequest();
        setCurrentUser(response.member);
        history.push("/");
    };

    return { signUp };
};

export default useSignUp;

interface SignUpUser {
    ok: boolean;
    token: string;
    member: Member;
}
