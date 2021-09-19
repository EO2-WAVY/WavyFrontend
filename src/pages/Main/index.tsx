import styled from "styled-components";

import TagSection from "components/Main/TagSection";
import Layout from "components/Common/Layout";
import VideoCard from "components/Common/VideoCard";

const Main = () => {
    return (
        <Layout>
            <TagSection />
            <Test>
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </Test>
            <Test1 />
            <Test />
            <Test1 />
            <Test />
        </Layout>
    );
};

export default Main;

const Test = styled.div`
    height: 100vh;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Test1 = styled.div`
    height: 40vh;
    width: 100px;
    background-color: red;
`;
