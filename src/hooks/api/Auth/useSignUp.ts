import ReactGA from "react-ga";
import { useHistory } from "react-router";
import { useSetRecoilState } from "recoil";
import { currentUserState } from "store/Auth";

import { UserInfo } from "pages/SignUpTerm";
import { post } from "utils/api/client";
import saveToken from "utils/Auth/saveToken";
import { Member } from "hooks/api/useCheckCurrentMember";
import useNotification from "hooks/Common/useNotification";
import { gcMarketingConsent, gcPrivacyConsent } from "utils/groupCode";
import { GA_CT_USER } from "constants/gaCategory";
interface useSignUpProps {
    userInfo: UserInfo;
    checks: boolean[];
}

const useSignUp = ({ userInfo, checks }: useSignUpProps) => {
    const setCurrentUser = useSetRecoilState(currentUserState);
    const history = useHistory();
    const { addNotification } = useNotification();

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

        if (!response.ok) {
            addNotification({ title: "회원가입 실패", description: "" });
            ReactGA.event({
                category: GA_CT_USER,
                action: `회원가입 실패 : ${response}`,
            });
            return;
        }

        ReactGA.event({ category: GA_CT_USER, action: "신규 회원가입" });
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
