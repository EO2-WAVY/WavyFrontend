import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import Layout from "components/Common/Layout";
import { defaultFadeInUpVariants, staggerHalf } from "constants/motions";
import useGetBookmarks from "hooks/api/Storage/useGetBookmarks";
import useIntersectionObserver from "hooks/Common/useIntersectionObserver";
import MotionLoading from "components/Common/MotionLoading";
import VideoCard from "components/Common/VideoCard/VideoCard";

const Storage = () => {
    const {
        refVideos,
        loadMore,
        isEmpty,
        isLoadingMore,
        isLoadingInitialData,
    } = useGetBookmarks();

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
            <Title
                variants={defaultFadeInUpVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                내가 보관한 <strong>영상</strong>
            </Title>

            <AnimatePresence exitBeforeEnter>
                {isLoadingInitialData && <MotionLoading key="storageLoading" />}

                {isEmpty ? (
                    <EmptyWrapper
                        key="storageEmpty"
                        variants={defaultFadeInUpVariants}
                    >
                        <span>보관함에 담은 영상이 없습니다</span>
                    </EmptyWrapper>
                ) : (
                    <VideoCardWrapper
                        key="storageVideoWrapper"
                        variants={staggerHalf}
                    >
                        {refVideos.map((refVideo) => (
                            <VideoCard
                                key={`storage${refVideo.rvSeq}`}
                                refVideo={refVideo}
                            />
                        ))}
                        {!isLoadingMore && (
                            <div
                                key="observerTarget"
                                ref={setTarget}
                                style={{ position: "absolute" }}
                            ></div>
                        )}
                    </VideoCardWrapper>
                )}
            </AnimatePresence>
        </Layout>
    );
};

export default Storage;

const Title = styled(motion.h1)`
    margin: 20px 0 40px 0;
    font-weight: normal;
    font-size: 1.5rem;

    & > strong {
        font-weight: 500;
    }
`;

const EmptyWrapper = styled(motion.section)`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;

    & > span {
        font-size: 1.25rem;
        color: ${({ theme }) => theme.color.lightGray};
    }
`;

const VideoCardWrapper = styled(motion.section)`
    width: 100%;
    margin: 12px 0 50px 0;

    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
    row-gap: 32px;
`;
