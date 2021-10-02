import { LS_USER_TOKEN_KEY } from "constants/storageKey";

import { useEffect } from "react";
import { useHistory } from "react-router";
import { useSetRecoilState } from "recoil";
import { currentUserTokenState } from "store/Auth";
import { get, updateInstanceInterceptorsRequest } from "utils/api/client";

const useDecideUserPush = () => {
    const setCurrentUserToken = useSetRecoilState(currentUserTokenState);

    const history = useHistory();

    useEffect(() => {
        const handleStorage = async () => {
            const userToken = localStorage.getItem(LS_USER_TOKEN_KEY);
            updateInstanceInterceptorsRequest();
            setCurrentUserToken(userToken);

            const response = await get<ErrorMember>("/members/me");
            if (response.statusCode === 403) {
                history.push("/signup/term");
                return;
            }

            // setCurrentUserInfo
            history.push("/");
        };

        window.addEventListener("storage", handleStorage);

        return () => {
            window.removeEventListener("storage", handleStorage);
        };
    }, [history, setCurrentUserToken]);

    useEffect(() => {}, []);
};

export default useDecideUserPush;

export interface ErrorMember {
    statusCode: number;
    message: string;
    error: string;
}
