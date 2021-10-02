import useGetServerToken from "hooks/api/Auth/useGetServerToken";
import { useRouterQuery } from "hooks/useRouterQuery";

const KakaoRedirect = () => {
    const code = useRouterQuery("code");
    useGetServerToken(code ? code : "");

    return <div></div>;
};

export default KakaoRedirect;
