import useGetServerToken from "hooks/api/Auth/useGetServerToken";
import { useRouterQuery } from "hooks/useRouterQuery";
import { useEffect } from "react";
import saveToken from "utils/Auth/saveToken";

const KakaoRedirect = () => {
    const code = useRouterQuery("code");
    useGetServerToken(code ? code : "");


    // window.close();
    return <div></div>;
};

export default KakaoRedirect;
