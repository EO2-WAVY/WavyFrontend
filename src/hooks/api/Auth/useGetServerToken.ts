import { useCallback, useEffect } from "react";
import { get } from "utils/api/client";
import saveToken from "utils/Auth/saveToken";

const useGetServerToken = (code: string) => {
    const saveServerToken = useCallback(async () => {
        const response = await get<ServerToken>("/auth/token", {
            params: { code },
        });

        saveToken(response.token); // useDecide의 storage 이벤트 호출
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
