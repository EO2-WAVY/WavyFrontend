import styled from "styled-components";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import TagElem from "components/Main/TagElem";
import useCarousel from "hooks/useCarousel";
import { useState } from "react";

const TagSection = () => {
    const { wrapperRef, onClickLeft, onClickRight } = useCarousel({
        dist: 304,
    });

    const { scrollY } = useViewportScroll();

    // for wrapper
    const [wrapperPosition, setWrapperPosition] = useState<"static" | "sticky">(
        "static"
    );
    scrollY.onChange((yPos) => {
        setWrapperPosition(yPos > 183 ? "sticky" : "static");
    });

    // for button
    const btnYposAnim = useTransform(scrollY, [0, 183, 9999], [0, 70, 70]);

    return (
        <Wrapper style={{ position: wrapperPosition }}>
            <LeftBtn
                onClick={onClickLeft}
                style={{ y: btnYposAnim }}
                whileTap={{ scale: 0.85 }}
            >
                <img src="/images/Main/carousel_left.svg" alt="left" />
            </LeftBtn>
            <Carousel ref={wrapperRef}>
                <TagElem title="BTS" />
                <TagElem title="BSSTS" />
                <TagElem title="BS" />
                <TagElem title="BSSSTS" />
                <TagElem title="BSTS" />
                <TagElem title="BTSS" />
                <TagElem title="BTS" />
                <TagElem title="BTS" />
                <TagElem title="BTS" />
                <TagElem title="BTS" />
                <TagElem title="BTS" />
                <TagElem title="BTS" />
                <TagElem title="BTS" />
                <TagElem title="BTS" />
            </Carousel>
            <RightBtn
                onClick={onClickRight}
                style={{ y: btnYposAnim }}
                whileTap={{ scale: 0.85 }}
            >
                <img src="/images/Main/carousel_right.svg" alt="right" />
            </RightBtn>
        </Wrapper>
    );
};

export default TagSection;

const Wrapper = styled(motion.section)`
    position: relative;
    top: -20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 60px 0 0 0;

    overflow: hidden;
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

    /* transition: background-color 0.3s; */
    transition: all 0.3s;

    & > img {
        width: 70%;
        height: 70%;
    }

    &:hover {
        background-color: rgba(201, 201, 201, 0.2);
    }
`;

const LeftBtn = styled(CarouselBtn)`
    &::after {
        /* background: linear-gradient(
            to right,
            rgba(255, 255, 255, 1) 20%,
            rgba(33, 33, 33, 0) 80%
        ); */
    }
`;

const RightBtn = styled(CarouselBtn)`
    /* &::before {
        content: "";
        position: absolute;
        width: 50px;
        height: 200px;
        right: 100%;
        background: linear-gradient(
            to left,
            rgba(255, 255, 255, 1) 20%,
            rgba(33, 33, 33, 0) 80%
        );
    } */
`;

const Carousel = styled(motion.div)`
    position: relative;
    width: 90%;

    display: flex;
    align-items: center;
    overflow: scroll;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
`;
