import { FormEvent, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { defaultFadeInUpVariants, staggerOne } from "constants/motions";
import useToggle from "hooks/useToggle";

import Layout from "components/Common/Layout";
import Hr from "components/Common/Hr";
import CheckSection from "components/SignUpTerm/CheckSection";
import TextSection from "components/SignUpTerm/TextSection";
import TermModal from "components/SignUpTerm/TermModal";
import { Utilize } from "components/Terms/Utilize";
import { PersonalInformation } from "components/Terms/PersonalInformation";

export interface UserInfo {
    email: string;
    nickname: string;
}

const SignUpTerm = () => {
    const [checks, setChecks] = useState<boolean[]>([false, false, false]);

    // for user info
    const [userInfo, setUserInfo] = useState<UserInfo>({
        email: "",
        nickname: "",
    });

    // for modal
    const [personalModalIsShowing, togglePersonalModal] = useToggle(false);
    const [marketingModalIsShowing, toggleMarketingModal] = useToggle(false);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <Layout>
            <Title variants={defaultFadeInUpVariants}>
                <strong>WAVY</strong> 회원가입
            </Title>

            <form onSubmit={onSubmit}>
                <CheckSection
                    Section={Section}
                    SubTitle={SubTitle}
                    checks={checks}
                    setChecks={setChecks}
                    togglePersonalModal={togglePersonalModal}
                    toggleMarketingModal={toggleMarketingModal}
                />
                <Hr />
                <TextSection
                    Section={Section}
                    SubTitle={SubTitle}
                    userInfo={userInfo}
                    setUserInfo={setUserInfo}
                />
                <Hr />
                <SubmitSection variants={staggerOne}>
                    <SubmitBtn
                        type="submit"
                        variants={defaultFadeInUpVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 1 }}
                    >
                        완료
                    </SubmitBtn>
                </SubmitSection>
            </form>

            <TermModal
                isShowing={personalModalIsShowing}
                hide={togglePersonalModal}
                title="이용약관"
                information={<PersonalInformation />}
            />

            <TermModal
                isShowing={marketingModalIsShowing}
                hide={toggleMarketingModal}
                title="마케팅/홍보 수집 약관"
                information={<Utilize />}
            />
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
