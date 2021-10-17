import { useEffect } from "react";
import { get } from "utils/api/client";
import saveToken from "utils/Auth/saveToken";

const useGetServerToken = (code: string) => {
    useEffect(() => {
        const saveTokenFromResponse = async () => {
            const response = await get<ServerToken>("/auth/token", {
                params: { code, redirectUrl: window.location.origin },
            });

            console.log(window.location.origin);
            console.log(response);
            
            if (response.token) {
                saveToken(response.token); // useDecide의 storage 이벤트 호출
            }

            // window.close();
        };

        saveTokenFromResponse();
    }, [code]);
};

export default useGetServerToken;

interface ServerToken {
    ok: string;
    token: string;
}
