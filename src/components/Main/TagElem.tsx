import styled from "styled-components";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useState } from "react";

interface ITagElem {
    title: string;
}

const TagElem = ({ title }: ITagElem) => {
    const { scrollY } = useViewportScroll();

    const marginAnim = useTransform(scrollY, [0, 183, 400], [16, 16, 6]);
    const CircleWidthAnim = useTransform(
        scrollY,
        [0, 183, 400],
        [120, 120, 60]
    );
    const CircleScaleAnim = useTransform(scrollY, [0, 183], [1, 0.6]);
    const CircleOpacityAnim = useTransform(scrollY, [0, 183], [1, 0]);

    // state + useTransform 을 커스텀 훅화 ?
    const [titleBgColor, setTitleBgColor] = useState<"#fff" | "#9E61FF">(
        "#fff"
    );
    const [titleColor, setTitleColor] = useState<"#242129" | "#fff">("#242129");

    scrollY.onChange((yPos) => {
        setTitleBgColor(yPos > 183 ? "#9E61FF" : "#fff");
        setTitleColor(yPos > 183 ? "#fff" : "#242129");
    });

    return (
        <Wrapper style={{ marginRight: marginAnim, marginLeft: marginAnim }}>
            <Item
                style={{
                    scale: CircleScaleAnim,
                    opacity: CircleOpacityAnim,
                    width: CircleWidthAnim,
                }}
            />
            <Title style={{ backgroundColor: titleBgColor, color: titleColor }}>
                {title}
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

const Item = styled(motion.div)`
    flex-shrink: 0;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #c4c4c4;
    transform-origin: bottom;
`;

const Title = styled(motion.span)`
    font-size: 1.25rem;
    padding: 9px 30px;
    border-radius: 32px;
    transition: background-color 0.3s, color 0.3s;
`;
