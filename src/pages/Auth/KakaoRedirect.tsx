import Layout from "components/Common/Layout";
import Spinner from "components/Common/Spinner";
import useGetServerToken from "hooks/api/Auth/useGetServerToken";
import { useRouterQuery } from "hooks/Common/useRouterQuery";

const KakaoRedirect = () => {
    const code = useRouterQuery("code");
    useGetServerToken(code ? code : "");

    return (
        <Layout>
            <Spinner widthPercent={20} margin="30vh 0"/>
        </Layout>
    );
};

export default KakaoRedirect;