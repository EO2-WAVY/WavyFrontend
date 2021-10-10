import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import useGetAnalyses from "hooks/api/useGetAnalyses";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import AnalysisVideoCard from "./AnalysisVideoCard";
import { staggerHalf } from "constants/motions";

const MyAnalysesSection = () => {
    const { analyses, loadMore, isReachingEnd } = useGetAnalyses();

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
            <Wrapper
                variants={staggerHalf}
                key="analyses"
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <button key="leftButton">{"<"}</button>
                <CarouselBox key="carouselBox">
                    {analyses.map((analysis) => {
                        console.log(analysis);
                        return (
                            <AnalysisVideoCard
                                key={analysis.anSeq}
                                analysis={analysis}
                            />
                        );
                    })}
                </CarouselBox>
                <button key="rightButton">{">"}</button>
            </Wrapper>
        </AnimatePresence>
    );
};

export default MyAnalysesSection;

const Wrapper = styled(motion.section)`
    width: 100%;
    margin: 40px 0 60px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CarouselBox = styled(motion.div)`
    width: 90%;
    display: flex;
    align-items: center;
    overflow: scroll;
    gap: 24px;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
`;
