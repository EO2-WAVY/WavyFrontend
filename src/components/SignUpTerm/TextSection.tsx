import { ForwardRefComponent, HTMLMotionProps, motion } from "framer-motion";
import styled, { DefaultTheme, StyledComponent } from "styled-components";

import { defaultFadeInUpVariants, staggerOne } from "constants/motions";

interface TextSectionProps {
    Section: StyledComponent<
        ForwardRefComponent<HTMLElement, HTMLMotionProps<"section">>,
        DefaultTheme,
        {},
        never
    >;
    SubTitle: StyledComponent<
        ForwardRefComponent<HTMLHeadingElement, HTMLMotionProps<"h2">>,
        DefaultTheme,
        {},
        never
    >;
}

const TextSection = ({ Section, SubTitle }: TextSectionProps) => {
    return (
        <Section variants={staggerOne}>
            <SubTitle variants={defaultFadeInUpVariants}>기본정보</SubTitle>
            <InputWrapper variants={defaultFadeInUpVariants}>
                <TextLabel>메일</TextLabel>
                <TextInput disabled type="text" value="test@test.tst" />
            </InputWrapper>
            <InputWrapper variants={defaultFadeInUpVariants}>
                <TextLabel>별명</TextLabel>
                <TextInput type="text" />
            </InputWrapper>
        </Section>
    );
};

export default TextSection;

const InputWrapper = styled(motion.div)`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`;

const TextLabel = styled.label`
    margin-right: 60px;
`;

const TextInput = styled.input`
    width: 350px;
    height: 46px;
    padding-left: 1rem;
    border-radius: 4px;
    border: solid 1px ${({ theme }) => theme.color.lightGray};

    &:disabled {
        background-color: rgba(229, 229, 229, 0.2);
    }
`;
