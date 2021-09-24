import styled from "styled-components";
import { motion } from "framer-motion";

import Layout from "components/Common/Layout";
import Hr from "components/Common/Hr";
import { defaultFadeInUpVariants, staggerOne } from "constants/motions";

const SignUpTerm = () => {
    return (
        <Layout>
            <Title variants={defaultFadeInUpVariants}>
                <strong>WAVY</strong> 회원가입
            </Title>
            <Section variants={staggerOne}>
                <SubTitle variants={defaultFadeInUpVariants}>약관동의</SubTitle>
                <InputWrapper variants={defaultFadeInUpVariants}>
                    <Checkbox type="checkbox" id="all" />
                    <label htmlFor="all" className="all">
                        <strong>WAVY</strong> 회원 약관에 모두 동의합니다
                    </label>
                </InputWrapper>
                <InputWrapper variants={defaultFadeInUpVariants}>
                    <Checkbox type="checkbox" id="personal" />
                    <label htmlFor="personal">개인정보 이용약관</label>
                    <span>전문보기 {">"}</span>
                </InputWrapper>
                <InputWrapper variants={defaultFadeInUpVariants}>
                    <Checkbox type="checkbox" id="marketing" />
                    <label htmlFor="marketing">
                        마케팅/홍보 수집 및 이용 (선택)
                    </label>
                    <span>전문보기 {">"}</span>
                </InputWrapper>
            </Section>
            <Hr />

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
            <Hr />

            <SubmitSection variants={staggerOne}>
                <SubmitBtn
                    variants={defaultFadeInUpVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1 }}
                >
                    완료
                </SubmitBtn>
            </SubmitSection>
        </Layout>
    );
};

export default SignUpTerm;

const Title = styled(motion.h1)`
    font-size: 2.25rem;
    font-weight: normal;
    margin-top: 40px;

    & > strong {
        font-weight: bold;
    }
`;

const Section = styled(motion.section)`
    padding: 80px 0 40px 0;
`;

const SubTitle = styled(motion.h2)`
    font-size: 1.5rem;
    font-weight: normal;
    margin-bottom: 40px;
`;

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

const SubmitSection = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 80px 0 120px 0;
`;

const SubmitBtn = styled(motion.button)`
    width: 320px;
    height: 54px;
    border-radius: 100px;
    background-color: ${({ theme }) => theme.color.lightPurple};

    font-size: 1.125rem;
    text-align: center;
    font-weight: 500;
    color: ${({ theme }) => theme.color.white};
`;
