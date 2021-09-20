import styled from "styled-components";
import { motion } from "framer-motion";

import Layout from "components/Common/Layout";
import TagSection from "components/Main/TagSection";
import LinkSection from "components/Main/LinkSection";
import VideoCard from "components/Common/VideoCard";

import { staggerOne } from "constants/motions";

const Main = () => {
    return (
        <Layout>
            <TagSection />
            <Test variants={staggerOne}>
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </Test>

            <LinkSection />
            <Test1 />
            <Test />
            <Test1 />
            <Test />
        </Layout>
    );
};

export default Main;

const Test = styled(motion.div)`
    height: 100vh;
    width: 100%;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const Test1 = styled.div`
    height: 40vh;
    width: 100px;
`;
