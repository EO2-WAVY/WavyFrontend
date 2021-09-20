import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { defaultFadeInUpVariants, staggerHalf } from "constants/motionUtils";

interface IMain {
    kind: string;
}

const Main = ({ kind }: IMain) => {
    const notice: string =
        kind === "로그인" ? "계정이 없으신가요?" : "계정이 있으신가요?";
    const noticeLink: string = kind === "로그인" ? "회원가입" : "로그인";

    const getLinkPath = () => {
        return kind === "회원가입" ? "/login" : "/signup";
    };

    return (
        <MainWrapper variants={staggerHalf}>
            <ProviderBtn variants={defaultFadeInUpVariants} provider="google">
                구글로 로그인
            </ProviderBtn>
            <ProviderBtn variants={defaultFadeInUpVariants} provider="naver">
                네이버로 로그인
            </ProviderBtn>
            <ProviderBtn variants={defaultFadeInUpVariants} provider="kakao">
                카카오톡으로 로그인
            </ProviderBtn>
            <ProviderBtn variants={defaultFadeInUpVariants} provider="facebook">
                페이스북으로 로그인
            </ProviderBtn>
            <Noti variants={defaultFadeInUpVariants}>
                {notice}
                <Link to={getLinkPath}> {noticeLink}</Link>
            </Noti>
        </MainWrapper>
    );
};

export default Main;

const MainWrapper = styled(motion.main)`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

interface IProviderBtn {
    provider: string;
}

const ProviderBtn = styled(motion.button)<IProviderBtn>`
    position: relative;
    width: 320px;
    height: 56px;
    border: 1px solid ${({ theme }) => theme.color.lightGray};
    margin-bottom: 16px;

    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 12px;
        transform: translate(0, -50%);
        width: 28px;
        height: 28px;

        background: url(${({ provider }) => `/images/Auth/${provider}.svg`});
        background-size: cover;
    }
`;

const Noti = styled(motion.span)`
    font-size: 14px;
    margin: 8px 0 120px 0;
    color: ${({ theme }) => theme.color.lightGray};

    & > a {
        cursor: pointer;
        text-decoration: underline;
    }
`;
