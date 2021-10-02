import { useCallback, useEffect } from "react";
import { get } from "utils/api/client";
import saveToken from "utils/Auth/saveToken";
import { Member } from "../useGetCurrentMember";

const useGetServerToken = (code: string) => {
    const saveServerToken = useCallback(async () => {
        const response = await get<ServerToken>("/auth/token", {
            params: { code },
        });

        saveToken(response.token);
        window.close();
    }, [code]);

    useEffect(() => {
        saveServerToken();
    }, [saveServerToken]);
};

export default useGetServerToken;

interface ServerToken {
    ok: string;
    token: string;
}
