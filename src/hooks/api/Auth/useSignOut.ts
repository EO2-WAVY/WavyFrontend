import { useSetRecoilState } from "recoil";
import { get } from "utils/api/client";

import { currentUserState } from "store/Auth";
import removeToken from "utils/Auth/removeToken";

const key: string = "/auth/kakaoLogout";

const useSignOut = () => {
    const setCurrentUser = useSetRecoilState(currentUserState);

    const signOut = async () => {
        const response = await get<KakaouLogout>(key);
        if (response.ok) {
            removeToken();
            setCurrentUser(null);
        }
    };

    return { signOut };
};

export default useSignOut;

interface KakaouLogout {
    error: string;
    ok: boolean;
}
