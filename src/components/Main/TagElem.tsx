import styled from "styled-components";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { staggerOne, defaultFadeInUpVariants } from "constants/motions";
import { useRecoilState } from "recoil";
import { currentTagState } from "store/Main";

interface TagElemProps {
    name: string;
    image: string;
}

const TagElem = ({ name, image }: TagElemProps) => {
    const { scrollY } = useViewportScroll();

    const wrapperMarginAnim = useTransform(scrollY, [0, 183, 400], [16, 16, 6]);
    const circleWidthAnim = useTransform(
        scrollY,
        [0, 183, 400],
        [120, 120, 60]
    );
    const circleScaleAnim = useTransform(scrollY, [80, 183], [1, 0.6]);
    const circleOpacityAnim = useTransform(scrollY, [80, 183], [1, 0]);

    const [titleBgColor, setTitleBgColor] = useState<"#fff" | "#9E61FF">(
        "#fff"
    );
    const [titleColor, setTitleColor] = useState<"#242129" | "#fff">("#242129");
    const titleVertPaddingAnim = useTransform(
        scrollY,
        [0, 183, 183],
        [0, 9, 9]
    );
    const titleHoriPaddingAnim = useTransform(
        scrollY,
        [0, 183, 183],
        [0, 30, 30]
    );

    scrollY.onChange((yPos) => {
        setTitleBgColor(yPos > 143 ? "#9E61FF" : "#fff");
        setTitleColor(yPos > 143 ? "#fff" : "#242129");
    });

    const [currentTag, setCurrentTag] = useRecoilState(currentTagState);
    const onClick = () => {
        setCurrentTag(name);
    };

    return (
        <Wrapper
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
                style={{
                    backgroundColor: titleBgColor,
                    color: titleColor,
                    paddingTop: titleVertPaddingAnim,
                    paddingBottom: titleVertPaddingAnim,
                    paddingLeft: titleHoriPaddingAnim,
                    paddingRight: titleHoriPaddingAnim,
                }}
                variants={defaultFadeInUpVariants}
            >
                {name}
            </Title>
        </Wrapper>
    );
};

export default TagElem;

const Wrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    cursor: pointer;
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

const Title = styled(motion.span)`
    font-size: 1.25rem;
    text-align: center;
    border-radius: 32px;
    transition: background-color 0.5s, color 0.5s;

    max-width: 100%;
    white-space: nowrap;
`;
