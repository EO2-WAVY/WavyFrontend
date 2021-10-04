import { useRecoilValue } from "recoil";
import { currentTagState } from "store/Main";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import Layout from "components/Common/Layout";
import TagSection from "components/Main/TagSection";
import VideoCard from "components/Common/VideoCard";
import NoMoreSection from "components/Main/NoMoreSection";

import { staggerHalf } from "constants/motions";
import useGetRefVideos from "hooks/api/Main/useGetRefVideos";
import useIntersectionObserver from "hooks/useIntersectionObserver";

const Main = () => {
    const currentTag = useRecoilValue(currentTagState);
    const { refVideos, loadMore, isReachingEnd } = useGetRefVideos();

    const onIntersect: IntersectionObserverCallback = ([
        { isIntersecting },
    ]) => {
        if (!isIntersecting) return;
        loadMore();
    };

    const { setTarget } = useIntersectionObserver({
        onIntersect,
        threshold: 1,
    });

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
            {isReachingEnd && <NoMoreSection />}
            <div ref={setTarget}></div>
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
    row-gap: 32px;
`;
