import useCarousel from "hooks/useCarousel";

import styled from "styled-components";

const TagSection = () => {
    const { wrapperRef, onClickLeft, onClickRight } = useCarousel({
        dist: 200,
    });

    return (
        <Wrapper>
            <Carousel ref={wrapperRef}>
                <LeftBtn onClick={onClickLeft}>click</LeftBtn>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <RightBtn onClick={onClickRight}>click</RightBtn>
            </Carousel>
        </Wrapper>
    );
};

export default TagSection;

const Wrapper = styled.section`
    width: 100%;
    height: 400px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Carousel = styled.div`
    position: relative;
    width: 500px;
    height: 200px;
    background-color: gray;

    display: flex;
    flex-wrap: nowrap;
    overflow: scroll;
    gap: 20px;
`;

const LeftBtn = styled.button`
    position: sticky;
    left: 0;
`;

const RightBtn = styled.button`
    position: sticky;
    right: 0;
`;

const Item = styled.div`
    flex-shrink: 0;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: blue;
`;
