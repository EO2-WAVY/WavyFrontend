import styled, { DefaultTheme, StyledComponent } from "styled-components";
import { motion, ForwardRefComponent, HTMLMotionProps } from "framer-motion";
import { defaultFadeInUpVariants, staggerOne } from "constants/motions";
import { ChangeEvent } from "react";

interface CheckSectionProps {
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
    checks: boolean[];
    onCheckChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckSection = ({
    Section,
    SubTitle,
    checks,
    onCheckChange,
}: CheckSectionProps) => {
    return (
        <Section variants={staggerOne}>
            <SubTitle variants={defaultFadeInUpVariants}>약관동의</SubTitle>
            <InputWrapper variants={defaultFadeInUpVariants}>
                <Checkbox
                    type="checkbox"
                    id="0"
                    checked={checks[0]}
                    onChange={onCheckChange}
                />
                <label htmlFor="0" className="all">
                    <strong>WAVY</strong> 회원 약관에 모두 동의합니다
                </label>
            </InputWrapper>

            <InputWrapper variants={defaultFadeInUpVariants}>
                <Checkbox
                    type="checkbox"
                    id="1"
                    checked={checks[1]}
                    onChange={onCheckChange}
                />
                <label htmlFor="1">개인정보 이용약관</label>
                <span>전문보기 {">"}</span>
            </InputWrapper>

            <InputWrapper variants={defaultFadeInUpVariants}>
                <Checkbox
                    type="checkbox"
                    id="2"
                    checked={checks[2]}
                    onChange={onCheckChange}
                />
                <label htmlFor="2">마케팅/홍보 수집 및 이용 (선택)</label>
                <span>전문보기 {">"}</span>
            </InputWrapper>
        </Section>
    );
};

export default CheckSection;

const InputWrapper = styled(motion.div)`
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`;

const Checkbox = styled.input`
    width: 18px;
    height: 18px;
    border-radius: 4px;
    border: solid 1px ${({ theme }) => theme.color.lightGray};
    margin-right: 16px;
    transition: border 0.3s, background-color 0.3s;

    &:checked {
        border-radius: 50%;
        border-color: ${({ theme }) => theme.color.purple};
        background-color: ${({ theme }) => theme.color.lightPurple};
    }

    & + .all {
        font-weight: 500;
        & > strong {
            color: ${({ theme }) => theme.color.purple};
        }
    }

    & ~ span {
        margin-left: 16px;
        color: ${({ theme }) => theme.color.purple};
        cursor: pointer;
    }
`;
