import { useRouterQuery } from "hooks/useRouterQuery";
import Layout from "components/Common/Layout";

import NoneData from "components/Search/NoneData";

const Search = () => {
    const query = useRouterQuery("q");

    return (
        <Layout>
            <NoneData query={query} />
        </Layout>
    );
};

export default Search;
