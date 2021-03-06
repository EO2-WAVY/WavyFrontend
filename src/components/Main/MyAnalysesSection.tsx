import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import Icon from "components/Common/Icon";
import AnalysesEmpty from "components/Common/AnalysesEmpty";
import MotionLoading from "components/Common/MotionLoading";
import AnalysisVideoCard from "components/Common/VideoCard/AnalysisVideoCard";

import useCarousel from "hooks/Common/useCarousel";
import useGetAnalyses from "hooks/api/useGetAnalyses";
import useIntersectionObserver from "hooks/Common/useIntersectionObserver";
import { defaultFadeInUpVariants, staggerHalf } from "constants/motions";

const MyAnalysesSection = () => {
    const { analyses, loadMore, isEmpty, isLoadingInitialData } =
        useGetAnalyses();

    const onIntersect: IntersectionObserverCallback = ([
        { isIntersecting },
    ]) => {
        if (!isIntersecting) return;

        loadMore();
    };

    const { setTarget } = useIntersectionObserver({
        onIntersect,
        threshold: 0,
        rootMargin: "10px",
    });

    const { wrapperRef, onClickLeft, onClickRight } = useCarousel({
        dist: 300,
    });

    return (
        <Wrapper
            variants={defaultFadeInUpVariants}
            key="analyses"
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <AnimatePresence exitBeforeEnter>
                {isLoadingInitialData ? (
                    <MotionLoading
                        key="mytag analyses loading"
                        height="400px"
                    />
                ) : isEmpty ? (
                    <AnalysesEmpty key="mytag analyses empty" />
                ) : (
                    <CarouselWrapper
                        key="mytage analyses result"
                        variants={defaultFadeInUpVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <CarouselBtn
                            key="carouselLeftBtn"
                            onClick={onClickLeft}
                            variants={defaultFadeInUpVariants}
                        >
                            <Icon name="main_carousel_left" />
                        </CarouselBtn>

                        <CarouselBox
                            key="carouselBox"
                            ref={wrapperRef}
                            variants={staggerHalf}
                        >
                            {analyses.map((analysis, index) => (
                                <AnalysisVideoCard
                                    key={index}
                                    analysis={analysis}
                                />
                            ))}

                            <IntersectionTarget
                                key="target"
                                ref={setTarget}
                                variants={defaultFadeInUpVariants}
                            />
                        </CarouselBox>

                        <CarouselBtn
                            key="carouselRightBtn"
                            onClick={onClickRight}
                            variants={defaultFadeInUpVariants}
                        >
                            <Icon name="main_carousel_right" />
                        </CarouselBtn>
                    </CarouselWrapper>
                )}
            </AnimatePresence>
        </Wrapper>
    );
};

export default MyAnalysesSection;

const Wrapper = styled(motion.section)`
    width: 100%;
    min-height: 400px;
    margin: 12px 0 60px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CarouselWrapper = styled(motion.section)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CarouselBox = styled(motion.div)`
    width: 90%;
    display: flex;
    align-items: flex-start;
    overflow: scroll;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
`;

const CarouselBtn = styled(motion.button)`
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(201, 201, 201, 0);

    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s;

    & > svg {
        width: 70%;
        height: 70%;
        transition: transform 0.3s;
    }

    &:hover {
        background-color: rgba(201, 201, 201, 0.2);
    }

    &:active > svg {
        transform: scale(0.8);
    }
`;

const IntersectionTarget = styled(motion.div)`
    flex-shrink: 0;
    width: 10px;
    height: 30px;
`;
