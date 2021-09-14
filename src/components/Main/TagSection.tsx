import useCarousel from "hooks/useCarousel";

import styled from "styled-components";
import TagElem from "./TagElem";

const TagSection = () => {
    const { wrapperRef, onClickLeft, onClickRight } = useCarousel({
        dist: 304,
    });

    return (
        <Wrapper>
            <CarouselBtn onClick={onClickLeft}>
                <img src="/images/Main/carousel_left.svg" alt="left" />
            </CarouselBtn>
            <Carousel ref={wrapperRef}>
                <TagElem title="BTS" />
                <TagElem title="BTS" />
                <TagElem title="BTS" />
                <TagElem title="BTS" />
                <TagElem title="BTS" />
                <TagElem title="BTS" />
                <TagElem title="BTS" />
                <TagElem title="BTS" />
                <TagElem title="BTS" />
                <TagElem title="BTS" />
                <TagElem title="BTS" />
                <TagElem title="BTS" />
                <TagElem title="BTS" />
                <TagElem title="BTS" />
            </Carousel>
            <CarouselBtn onClick={onClickRight}>
                <img src="/images/Main/carousel_right.svg" alt="right" />
            </CarouselBtn>
        </Wrapper>
    );
};

export default TagSection;

const Wrapper = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 60px 0 0 0;
`;

const CarouselBtn = styled.button`
    position: relative;
    left: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(201, 201, 201, 0);
    transition: background-color 0.3s;

    & > img {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 70%;
        height: 70%;
        transform: translate(-50%, -50%);
    }

    &:hover {
        background-color: rgba(201, 201, 201, 0.2);
    }
`;

const Carousel = styled.div`
    position: relative;
    width: 90%;

    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    overflow: scroll;
    gap: 32px;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
`;

const Item = styled.div`
    flex-shrink: 0;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #c4c4c4;
`;
