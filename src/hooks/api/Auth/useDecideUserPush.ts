import { LS_USER_TOKEN_KEY } from "constants/storageKey";
import useNotification from "hooks/Common/useNotification";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { useSetRecoilState } from "recoil";
import { currentUserState } from "store/Auth";
import { get } from "utils/api/client";
import { Member } from "../useCheckCurrentMember";

const useDecideUserPush = () => {
    const history = useHistory();
    const setCurrentUser = useSetRecoilState(currentUserState);
    const { addNotification } = useNotification();

    useEffect(() => {
        const handleStorage = async (e: StorageEvent) => {
            if (e.key !== LS_USER_TOKEN_KEY) return;

            const response = await get<ErrorMember>("/members/me");
            if (response.statusCode === 403) {
                history.push("/signup/term");
                return;
            }

            if (!response.member) {
                addNotification({
                    title: "로그인에 실패하였습니다",
                    description: "",
                });
                return;
            }

            setCurrentUser(response.member);
            history.push("/");
        };

        window.addEventListener("storage", handleStorage);

        return () => {
            window.removeEventListener("storage", handleStorage);
        };
    }, [addNotification, history, setCurrentUser]);
};

export default useDecideUserPush;

export interface ErrorMember {
    member: Member;
    statusCode: number;
    message: string;
    error: string;
}
