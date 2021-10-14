import { useEffect } from "react";
import { get } from "utils/api/client";
import saveToken from "utils/Auth/saveToken";

const useGetServerToken = (code: string) => {
    useEffect(() => {
        const saveTokenFromResponse = async () => {
            const response = await get<ServerToken>("/auth/token", {
                params: { code },
            });

            saveToken(response.token ? response.token : code); // useDecide의 storage 이벤트 호출
            console.log(response);
            window.close();
        };

        saveTokenFromResponse();
    }, [code]);
};

export default useGetServerToken;

interface ServerToken {
    ok: string;
    token: string;
}
