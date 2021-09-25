import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { defaultFadeInUpVariants, staggerOne } from "constants/motions";

import Layout from "components/Common/Layout";
import Hr from "components/Common/Hr";
import CheckSection from "components/SignUpTerm/CheckSection";
import TextSection from "components/SignUpTerm/TextSection";

const SignUpTerm = () => {
    const [checks, setChecks] = useState<boolean[]>([false, false, false]);
    const [nickname, setNickname] = useState<string>("");

    return (
        <Layout>
            <Title variants={defaultFadeInUpVariants}>
                <strong>WAVY</strong> 회원가입
            </Title>

            <CheckSection
                Section={Section}
                SubTitle={SubTitle}
                checks={checks}
                setChecks={setChecks}
            />
            <Hr />
            <TextSection
                Section={Section}
                SubTitle={SubTitle}
                nickname={nickname}
                setNickname={setNickname}
            />
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
