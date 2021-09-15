import styled from "styled-components";
import { motion, useViewportScroll, useTransform } from "framer-motion";

interface ITagElem {
    title: string;
}

const TagElem = ({ title }: ITagElem) => {
    const { scrollY } = useViewportScroll();

    const marginAnim = useTransform(scrollY, [0, 183], [16, 4]);
    const CircleScaleAnim = useTransform(scrollY, [0, 183], [1, 0.6]);
    const CircleOpacityAnim = useTransform(scrollY, [0, 183], [1, 0]);

    return (
        <Wrapper style={{ marginRight: marginAnim, marginLeft: marginAnim }}>
            <Item style={{ scale: CircleScaleAnim, opacity: CircleOpacityAnim }} />
            <Title>{title}</Title>
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

const Title = styled.span`
    font-size: 1.5rem;
`;
