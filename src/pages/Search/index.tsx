import styled from "styled-components";

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

const Test = styled.div`
    width: 100px;
    height: 200vh;
`;
