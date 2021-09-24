import styled from "styled-components";
import { motion } from "framer-motion";

import Layout from "components/Common/Layout";
import Hr from "components/Common/Hr";

const SignUpTerm = () => {
    return (
        <Layout>
            <Title>
                <strong>WAVY</strong> 회원가입
            </Title>
            <Section>
                <SubTitle>약관동의</SubTitle>
                <InputWrapper>
                    <Checkbox type="checkbox" id="all" />
                    <label htmlFor="all" className="all">
                        <strong>WAVY</strong> 회원 약관에 모두 동의합니다
                    </label>
                </InputWrapper>
                <InputWrapper>
                    <Checkbox type="checkbox" id="personal" />
                    <label htmlFor="personal">개인정보 이용약관</label>
                </InputWrapper>
                <InputWrapper>
                    <Checkbox type="checkbox" id="marketing" />
                    <label htmlFor="marketing">
                        마케팅/홍보 수집 및 이용 (선택)
                    </label>
                </InputWrapper>
            </Section>
            <Hr />

            <Section>
                <SubTitle>기본정보</SubTitle>
                <p>안녕하세요</p>
            </Section>
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
`;
