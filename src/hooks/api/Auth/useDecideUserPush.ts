import { useEffect } from "react";
import { useHistory } from "react-router";
import { useSetRecoilState } from "recoil";
import { currentUserState } from "store/Auth";
import { get } from "utils/api/client";
import { Member } from "../useCheckCurrentMember";

const useDecideUserPush = () => {
    const history = useHistory();
    const setCurrentUser = useSetRecoilState(currentUserState);

    useEffect(() => {
        const handleStorage = async () => {
            const response = await get<ErrorMember>("/members/me");
            if (response.statusCode === 403) {
                history.push("/signup/term");
                return;
            }

            setCurrentUser(response.member);
            history.push("/");
        };

        window.addEventListener("storage", handleStorage);

        return () => {
            window.removeEventListener("storage", handleStorage);
        };
    }, [history, setCurrentUser]);
};

export default useDecideUserPush;

export interface ErrorMember {
    member: Member;
    statusCode: number;
    message: string;
    error: string;
}
