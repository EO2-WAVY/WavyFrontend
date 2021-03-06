import { useState } from "react";
import styled from "styled-components";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import { TAG_SCROLLED_YPOS } from "components/Main/TagSection";
import { staggerOne, defaultFadeInUpVariants } from "constants/motions";
import useCurrentTag from "hooks/Common/useCurrentTag";

interface TagElemProps {
    name: string;
    image: string;
}

const TagElem = ({ name, image }: TagElemProps) => {
    const { scrollY } = useViewportScroll();

    const wrapperMarginAnim = useTransform(
        scrollY,
        [0, TAG_SCROLLED_YPOS, 400],
        [20, 20, 6]
    );
    const circleWidthAnim = useTransform(
        scrollY,
        [0, TAG_SCROLLED_YPOS, 400],
        [120, 120, 60]
    );
    const circleScaleAnim = useTransform(
        scrollY,
        [80, TAG_SCROLLED_YPOS],
        [1, 0.6]
    );
    const circleOpacityAnim = useTransform(
        scrollY,
        [80, TAG_SCROLLED_YPOS],
        [1, 0]
    );

    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const titleVertPaddingAnim = useTransform(
        scrollY,
        [0, TAG_SCROLLED_YPOS, TAG_SCROLLED_YPOS],
        [0, 9, 9]
    );
    const titleHoriPaddingAnim = useTransform(
        scrollY,
        [0, TAG_SCROLLED_YPOS, TAG_SCROLLED_YPOS],
        [0, 30, 30]
    );

    scrollY.onChange((yPos) => {
        setIsScrolled(yPos > 143);
    });

    const { currentTag, setCurrentTag } = useCurrentTag();
    const onClick = () => {
        setCurrentTag(name);
    };

    return (
        <Wrapper
            isScrolled={isScrolled}
            onClick={onClick}
            style={{
                marginRight: wrapperMarginAnim,
                marginLeft: wrapperMarginAnim,
            }}
            variants={staggerOne}
        >
            <ThumbnailWrapper
                isCurrentTag={currentTag === name}
                style={{
                    scale: circleScaleAnim,
                    opacity: circleOpacityAnim,
                    width: circleWidthAnim,
                }}
                variants={defaultFadeInUpVariants}
            >
                <Thumbnail src={image} />
            </ThumbnailWrapper>
            <Title
                isScrolled={isScrolled}
                isCurrentTag={currentTag === name}
                style={{
                    paddingTop: titleVertPaddingAnim,
                    paddingBottom: titleVertPaddingAnim,
                    paddingLeft: titleHoriPaddingAnim,
                    paddingRight: titleHoriPaddingAnim,
                }}
            >
                {name}
            </Title>
        </Wrapper>
    );
};

export default TagElem;

interface TitleProps {
    isScrolled: boolean;
    isCurrentTag: boolean;
}

const Title = styled(motion.span)<TitleProps>`
    font-size: 1.125rem;
    text-align: center;
    border-radius: 32px;
    white-space: nowrap;

    transition: all 0.5s;
    transform-origin: center;
    opacity: ${({ isScrolled }) => (isScrolled ? 1 : 0)};
    transform: translateY(${({ isScrolled }) => (isScrolled ? 0 : "10px")});

    font-weight: ${({ isScrolled }) => (isScrolled ? "bold" : "normal")};

    background-color: ${({ isScrolled, isCurrentTag, theme }) => {
        if (!isScrolled) return theme.color.white;
        else if (isCurrentTag) return theme.color.lightPurple;
        return theme.color.white;
    }};

    color: ${({ isScrolled, isCurrentTag, theme }) => {
        if (!isScrolled) return theme.color.black;
        else if (isCurrentTag) return theme.color.white;
        return theme.color.lightPurple;
    }};

    border: ${({ isScrolled, isCurrentTag, theme }) =>
        isScrolled && !isCurrentTag
            ? `solid 1.75px ${theme.color.lightPurple}`
            : `solid 1.75px ${theme.color.white}`};
`;

const Wrapper = styled(motion.div)<{ isScrolled: boolean }>`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    cursor: pointer;

    width: ${({ isScrolled }) => (isScrolled ? "auto" : "100px")};
    transition: all 0.5s;
    overflow: visible;

    &:hover > ${Title} {
        opacity: 1;
        transform: translateY(0);
    }
`;

const ThumbnailWrapper = styled(motion.div)<{ isCurrentTag: boolean }>`
    position: relative;
    flex-shrink: 0;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #c4c4c4;
    transform-origin: bottom;

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 50%;
        background: linear-gradient(180deg, #d4c0f7 0%, #852bff 100%);

        opacity: ${({ isCurrentTag }) => (isCurrentTag ? 1 : 0)};
        transition: all 0.8s;
    }
`;

const Thumbnail = styled(motion.img)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #c4c4c4;
    object-fit: cover;
`;
