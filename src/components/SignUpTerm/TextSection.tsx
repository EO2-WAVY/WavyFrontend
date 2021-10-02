import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { ForwardRefComponent, HTMLMotionProps, motion } from "framer-motion";
import styled, { DefaultTheme, StyledComponent } from "styled-components";

import { defaultFadeInUpVariants, staggerOne } from "constants/motions";
import { UserInfo } from "pages/SignUpTerm";

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
    userInfo: UserInfo;
    setUserInfo: Dispatch<SetStateAction<UserInfo>>;
}

const TextSection = ({
    Section,
    SubTitle,
    userInfo,
    setUserInfo,
}: TextSectionProps) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setUserInfo({ ...userInfo, [id]: value });
    };

    return (
        <Section variants={staggerOne}>
            <SubTitle variants={defaultFadeInUpVariants}>기본정보</SubTitle>
            <InputWrapper variants={defaultFadeInUpVariants}>
                <TextLabel>메일</TextLabel>
                <TextInput
                    type="email"
                    id="email"
                    required
                    value={userInfo.email}
                    onChange={onChange}
                />
            </InputWrapper>

            <InputWrapper variants={defaultFadeInUpVariants}>
                <TextLabel>별명</TextLabel>
                <TextInput
                    type="text"
                    id="nickname"
                    required
                    value={userInfo.nickname}
                    onChange={onChange}
                />
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
