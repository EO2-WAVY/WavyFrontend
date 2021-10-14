import Layout from "components/Common/Layout";
import Spinner from "components/Common/Spinner";
import useGetServerToken from "hooks/api/Auth/useGetServerToken";
import { useRouterQuery } from "hooks/Common/useRouterQuery";
import { useLocation } from "react-router";

const KakaoRedirect = () => {
    const location = useLocation();
    const code = useRouterQuery("code");
    
    if (!code) throw Error(`SIGNUP : code is not found ${location}`);
    
    useGetServerToken(code);

    return (
        <Layout>
            <Spinner widthPercent={20} margin="30vh 0"/>
        </Layout>
    );
};

export default KakaoRedirect;