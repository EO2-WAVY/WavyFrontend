import useCarousel from "hooks/useCarousel";

import styled from "styled-components";
import TagElem from "./TagElem";

const TagSection = () => {
    const { wrapperRef, onClickLeft, onClickRight } = useCarousel({
        dist: 304,
    });

    return (
        <Wrapper>
            <LeftBtn onClick={onClickLeft}>
                <img src="/images/Main/carousel_left.svg" alt="left" />
            </LeftBtn>
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
            <RightBtn onClick={onClickRight}>
                <img src="/images/Main/carousel_right.svg" alt="right" />
            </RightBtn>
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

const LeftBtn = styled.button`
    position: sticky;
    left: 0;
`;

const RightBtn = styled.button`
    position: sticky;
    right: 0;
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
