import { gcMarketingConsent, gcPrivacyConsent } from "utils/groupCode";
import { UserInfo } from "pages/SignUpTerm";
import { useHistory } from "react-router";
import { useSetRecoilState } from "recoil";
import { currentUserState } from "store/Auth";
import { post } from "utils/api/client";
import saveToken from "utils/Auth/saveToken";
import { Member } from "hooks/api/useCheckCurrentMember";

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
            profileImageUrl: null,
            privacyConsentCode: gcPrivacyConsent(checks[1]),
            marketingConsentCode: gcMarketingConsent(checks[2]),
            videoOptionCode: "40001",
        });

        saveToken(response.token);
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
