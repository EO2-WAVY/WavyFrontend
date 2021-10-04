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
import { isEmpty } from "lodash";

const Main = () => {
    const currentTag = useRecoilValue(currentTagState);
    const { refVideos, loadMore, isReachingEnd } = useGetRefVideos();

    console.log(refVideos);

    return (
        <Layout>
            <TagSection />
            <AnimatePresence exitBeforeEnter>
                <VideoCardWrapper
                    variants={staggerHalf}
                    key={currentTag}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    {refVideos.map((refVideo) => (
                        <VideoCard refVideo={refVideo} />
                    ))}
                </VideoCardWrapper>
            </AnimatePresence>
            <LinkSection />
        </Layout>
    );
};

export default Main;

const VideoCardWrapper = styled(motion.div)`
    width: 100%;
    margin-top: 60px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
`;
