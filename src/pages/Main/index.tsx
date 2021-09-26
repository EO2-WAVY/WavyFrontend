import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import Layout from "components/Common/Layout";
import TagSection from "components/Main/TagSection";
import LinkSection from "components/Main/LinkSection";
import VideoCard from "components/Common/VideoCard";

import { staggerOne } from "constants/motions";
import { currentTagState } from "store/Main";

const Main = () => {
    const currentTag = useRecoilValue(currentTagState);
    return (
        <Layout>
            <TagSection />
            <AnimatePresence exitBeforeEnter>
                <Test
                    variants={staggerOne}
                    key={currentTag}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                </Test>
            </AnimatePresence>
            <LinkSection />
        </Layout>
    );
};

export default Main;

const Test = styled(motion.div)`
    width: 100%;
    margin-top: 60px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
`;
