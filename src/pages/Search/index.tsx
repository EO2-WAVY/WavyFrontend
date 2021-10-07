import { useRouterQuery } from "hooks/useRouterQuery";
import Layout from "components/Common/Layout";

import NoneData from "components/Search/NoneData";
import useGetRefVideos from "hooks/api/Main/useGetRefVideos";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { staggerHalf } from "constants/motions";
import VideoCard from "components/Common/VideoCard";
import NoMoreSection from "components/Main/NoMoreSection";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import RefVideoSection from "components/Main/RefVideoSection";

const Search = () => {
    const query = useRouterQuery("q");

    const { refVideos, isEmpty, isReachingEnd, loadMore } = useGetRefVideos(
        query as string
    );

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
        </Layout>
    );
};

export default Search;

const VideoCardWrapper = styled(motion.div)`
    width: 100%;
    margin-top: 40px;

    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
    row-gap: 32px;
`;
