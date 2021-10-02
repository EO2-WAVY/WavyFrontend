import { useRouterQuery } from "hooks/useRouterQuery";
import saveToken from "utils/Auth/saveToken";

const KakaoRedirect = () => {
    const code = useRouterQuery("code");
    saveToken(code ? code : "");
    window.close();
    return <div>{code}</div>;
};

export default KakaoRedirect;
