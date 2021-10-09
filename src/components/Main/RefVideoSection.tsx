import { useRecoilValue } from "recoil";
import { currentTagState } from "store/Main";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import VideoCard from "components/Common/VideoCard";
import NoMoreSection from "components/Main/NoMoreSection";

import useGetRefVideos from "hooks/api/Main/useGetRefVideos";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import { staggerHalf } from "constants/motions";

const RefVideoSection = () => {
    const currentTag = useRecoilValue(currentTagState);
    const { refVideos, loadMore, isReachingEnd } = useGetRefVideos({
        suspense: true,
    });

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
        <AnimatePresence exitBeforeEnter>
            <VideoCardWrapper
                variants={staggerHalf}
                key={currentTag}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                {refVideos.map((refVideo, index) => (
                    <VideoCard
                        key={`${index}${refVideo.rvSeq}`}
                        refVideo={refVideo}
                    />
                ))}
            </VideoCardWrapper>

            {isReachingEnd && <NoMoreSection key="NoMoreSection" />}
            <div key="observerTarget" ref={setTarget}></div>
        </AnimatePresence>
    );
};

export default RefVideoSection;

const VideoCardWrapper = styled(motion.div)`
    width: 100%;
    margin-top: 40px;

    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
    row-gap: 32px;
`;
