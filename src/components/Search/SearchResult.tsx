import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { staggerHalf } from "constants/motions";

import VideoCard from "components/Common/VideoCard/VideoCard";
import NoMoreSection from "components/Main/NoMoreSection";
import NoneData from "./NoneData";

import useGetRefVideos from "hooks/api/Main/useGetRefVideos";
import useIntersectionObserver from "hooks/useIntersectionObserver";

interface SearchResultProps {
    query: string;
}

const SearchResult = ({ query }: SearchResultProps) => {
    const { refVideos, isEmpty, isReachingEnd, loadMore } = useGetRefVideos({
        query: query as string,
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
            {isEmpty ? (
                <NoneData query={query} key={query} />
            ) : (
                <AnimatePresence exitBeforeEnter>
                    <VideoCardWrapper
                        variants={staggerHalf}
                        key={query}
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
            )}
        </AnimatePresence>
    );
};

export default SearchResult;

const VideoCardWrapper = styled(motion.div)`
    width: 100%;
    margin-top: 40px;

    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
    row-gap: 32px;
`;
