import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import Layout from "components/Common/Layout";
import TagSection from "components/Main/TagSection";
import LinkSection from "components/Main/LinkSection";
import VideoCard from "components/Common/VideoCard";

import { staggerHalf } from "constants/motions";
import { currentTagState } from "store/Main";
import useGetRefVideos from "hooks/api/Main/useGetRefVideos";

const Main = () => {
    const currentTag = useRecoilValue(currentTagState);
    const {refVideos, loadMore, isReachingEnd} = useGetRefVideos();

    console.log(refVideos);


    return (
        <Layout>
            <TagSection />
            <AnimatePresence exitBeforeEnter>
                <Test
                    variants={staggerHalf}
                    key={currentTag}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
                    <VideoCard />
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
