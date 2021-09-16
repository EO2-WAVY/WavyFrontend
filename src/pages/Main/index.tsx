import styled from "styled-components";

import TagSection from "components/Main/TagSection";
import Layout from "components/Common/Layout";

const Main = () => {
    return (
        <Layout>
            <TagSection />
            <Test />
            <Test1 />
            <Test />
            <Test1 />
            <Test />
        </Layout>
    );
};

export default Main;

const Test = styled.div`
    height: 50vh;
`;

const Test1 = styled.div`
    height: 40vh;
    width: 100px;
    background-color: red;
`;
