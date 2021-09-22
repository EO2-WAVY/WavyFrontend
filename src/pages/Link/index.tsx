import Layout from "components/Common/Layout";
import { useRouterQuery } from "hooks/useRouterQuery";

const Link = () => {
    const youtubeCode = useRouterQuery("y");

    return <Layout>{youtubeCode}</Layout>;
};

export default Link;
