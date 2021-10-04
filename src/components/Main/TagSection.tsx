import { useState } from "react";
import styled from "styled-components";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import useCarousel from "hooks/useCarousel";
import useGetTags from "hooks/api/useGetTags";
import TagElem from "components/Main/TagElem";
import Icon from "components/Common/Icon";
import { useRecoilValue } from "recoil";
import { currentUserState } from "store/Auth";

export const TAG_SCROLLED_YPOS: number = 163;

const TagSection = () => {
    // for Carousel
    const { wrapperRef, onClickLeft, onClickRight } = useCarousel({
        dist: 304,
    });

    // for animation
    const { scrollY } = useViewportScroll();
    const [wrapperPosition, setWrapperPosition] = useState<"static" | "sticky">(
        "static"
    );
    scrollY.onChange((yPos) => {
        setWrapperPosition(yPos > TAG_SCROLLED_YPOS ? "sticky" : "static");
    });
    const btnYposAnim = useTransform(
        scrollY,
        [0, TAG_SCROLLED_YPOS, 9999],
        [0, 70, 70]
    );

    // for fetch
    const { data } = useGetTags();

    // for LinkSection
    const currentUser = useRecoilValue(currentUserState);

    return (
        <Wrapper style={{ position: wrapperPosition }}>
            <LeftBtn onClick={onClickLeft} style={{ y: btnYposAnim }}>
                <Icon name="main_carousel_left" />
            </LeftBtn>
            <Carousel ref={wrapperRef}>
                {currentUser && (
                    <TagElem
                        name={currentUser?.mbrNickname}
                        image={currentUser?.profileImageUrl}
                    />
                )}

                {data?.tags.map(({ tagName, tagUrl }) => (
                    <TagElem key={tagName} name={tagName} image={tagUrl} />
                ))}
            </Carousel>
            <RightBtn onClick={onClickRight} style={{ y: btnYposAnim }}>
                <Icon name="main_carousel_right" />
            </RightBtn>
        </Wrapper>
    );
};

export default TagSection;

const Wrapper = styled(motion.section)`
    position: relative;
    top: -30px; // 스크롤됐을 시 높이를 결정하는 요소입니다.
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.color.white};
    padding: 0 0 8px 0;
    margin: 60px 0 0 0;
    overflow: hidden;
    z-index: 998;
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
    padding-top: 6px;
    display: flex;
    align-items: center;
    overflow: scroll;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
`;
