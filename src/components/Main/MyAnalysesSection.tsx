import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import useGetAnalyses from "hooks/api/useGetAnalyses";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import AnalysisVideoCard from "./AnalysisVideoCard";
import { staggerHalf } from "constants/motions";
import Icon from "components/Common/Icon";
import useCarousel from "hooks/useCarousel";

const MyAnalysesSection = () => {
    const { analyses, loadMore } = useGetAnalyses();

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
        <AnimatePresence exitBeforeEnter>
            <Wrapper
                variants={staggerHalf}
                key="analyses"
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <CarouselBtn key="carouselLeftBtn" onClick={onClickLeft}>
                    <Icon name="main_carousel_left" />
                </CarouselBtn>
                <CarouselBox key="carouselBox" ref={wrapperRef}>
                    {analyses.map((analysis, index) => (
                        <AnalysisVideoCard key={index} analysis={analysis} />
                    ))}
                    <IntersectionTarget key="target" ref={setTarget} />
                </CarouselBox>
                <CarouselBtn key="carouselRightBtn" onClick={onClickRight}>
                    <Icon name="main_carousel_right" />
                </CarouselBtn>
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

const IntersectionTarget = styled.div`
    flex-shrink: 0;
    width: 10px;
    height: 30px;
`;
