import Layout from "components/Common/Layout";
import { useRouterQuery } from "hooks/useRouterQuery";

const Link = () => {
    const youtubeCode = useRouterQuery("y");

    return <div>{youtubeCode}</div>;
};

export default Link;
