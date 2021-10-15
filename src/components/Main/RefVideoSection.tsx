import { useRecoilValue } from "recoil";
import { currentTagState } from "store/Main";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import VideoCard from "components/Common/VideoCard/VideoCard";
import NoMoreSection from "components/Main/NoMoreSection";

import useGetRefVideos from "hooks/api/Main/useGetRefVideos";
import useIntersectionObserver from "hooks/Common/useIntersectionObserver";
import { staggerHalf } from "constants/motions";

const RefVideoSection = () => {
    const currentTag = useRecoilValue(currentTagState);
    const { refVideos, loadMore, isReachingEnd, isLoadingMore } =
        useGetRefVideos({
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
        <>
            <AnimatePresence exitBeforeEnter initial={false}>
                <VideoCardWrapper
                    variants={staggerHalf}
                    key={`${currentTag}`}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    {refVideos.map((refVideo) => (
                        <VideoCard
                            key={`${currentTag}${refVideo.rvSeq}`}
                            refVideo={refVideo}
                        />
                    ))}
                </VideoCardWrapper>
            </AnimatePresence>

            {isReachingEnd && (
                <NoMoreSection key={`${currentTag}NoMoreSection`} />
            )}

            {!isLoadingMore && <div key="observerTarget" ref={setTarget}></div>}
        </>
    );
};

export default RefVideoSection;

const VideoCardWrapper = styled(motion.div)`
    width: 100%;
    margin-top: 24px;

    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
    row-gap: 32px;
`;
