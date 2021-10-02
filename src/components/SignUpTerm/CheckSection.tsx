import styled, { DefaultTheme, StyledComponent } from "styled-components";
import { motion, ForwardRefComponent, HTMLMotionProps } from "framer-motion";
import { defaultFadeInUpVariants, staggerOne } from "constants/motions";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

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
    setChecks: Dispatch<SetStateAction<boolean[]>>;
    togglePersonalModal: VoidFunction;
    toggleMarketingModal: VoidFunction;
}

const CheckSection = ({
    Section,
    SubTitle,
    checks,
    setChecks,
    togglePersonalModal,
    toggleMarketingModal,
}: CheckSectionProps) => {
    // 동의한 id에 따라 상태 적용
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {
            target: { id },
        } = e;
        const nId = parseInt(id);
        if (![0, 1, 2].includes(nId)) return;

        let tempArr = [...checks];
        if (nId === 0) tempArr = Array(tempArr.length).fill(!tempArr[0]);
        else tempArr[nId] = !tempArr[nId];
        setChecks(tempArr);
    };

    return (
        <Section variants={staggerOne}>
            <SubTitle variants={defaultFadeInUpVariants}>약관동의</SubTitle>
            <InputWrapper variants={defaultFadeInUpVariants}>
                <Checkbox
                    type="checkbox"
                    id="0"
                    checked={checks[0]}
                    onChange={onChange}
                />
                <label htmlFor="0" className="all">
                    <strong>WAVY</strong> 회원 약관에 모두 동의합니다
                </label>
            </InputWrapper>

            <InputWrapper variants={defaultFadeInUpVariants}>
                <Checkbox
                    type="checkbox"
                    id="1"
                    required
                    checked={checks[1]}
                    onChange={onChange}
                />
                <label htmlFor="1">개인정보 이용약관</label>
                <span onClick={togglePersonalModal}>전문보기 {">"}</span>
            </InputWrapper>

            <InputWrapper variants={defaultFadeInUpVariants}>
                <Checkbox
                    type="checkbox"
                    id="2"
                    checked={checks[2]}
                    onChange={onChange}
                />
                <label htmlFor="2">마케팅/홍보 수집 및 이용 (선택)</label>
                <span onClick={toggleMarketingModal}>전문보기 {">"}</span>
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
