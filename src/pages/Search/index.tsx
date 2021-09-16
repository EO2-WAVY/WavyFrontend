import styled from "styled-components";

import { useRouterQuery } from "hooks/useRouterQuery";
import Layout from "components/Common/Layout";

const Search = () => {
    const query = useRouterQuery("q");

    return (
        <Layout>
            나는{query}
            <Test />
        </Layout>
    );
};

export default Search;

const Test = styled.div`
    width: 100px;
    height: 200vh;
`;
