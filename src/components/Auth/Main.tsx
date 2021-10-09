import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { defaultFadeInUpVariants, staggerHalf } from "constants/motions";

import google from "assets/images/Auth/google.svg";
import naver from "assets/images/Auth/naver.svg";
import kakao from "assets/images/Auth/kakao.svg";
import facebook from "assets/images/Auth/facebook.svg";
import useGetKakaoLogInUrl from "hooks/api/Auth/useGetKakaoLogInUrl";
import useNotification from "hooks/useNotification";

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

    const { onClickLoginBtn } = useGetKakaoLogInUrl();
    const { addNotification } = useNotification();

    const onClickDisabled = () => {
        addNotification({
            title: "죄송합니다",
            description: "지원하지 않는 기능입니다.",
            autoHideDuration: 5,
        });
    };

    return (
        <MainWrapper variants={staggerHalf}>
            <ProviderBtn
                variants={defaultFadeInUpVariants}
                provider={google}
                className="disabled"
                onClick={onClickDisabled}
            >
                구글로 로그인
            </ProviderBtn>
            <ProviderBtn
                variants={defaultFadeInUpVariants}
                provider={naver}
                className="disabled"
                onClick={onClickDisabled}
            >
                네이버로 로그인
            </ProviderBtn>
            <ProviderBtn
                variants={defaultFadeInUpVariants}
                provider={kakao}
                onClick={onClickLoginBtn}
            >
                카카오톡으로 로그인
            </ProviderBtn>
            <ProviderBtn
                variants={defaultFadeInUpVariants}
                provider={facebook}
                className="disabled"
                onClick={onClickDisabled}
            >
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

        background: url(${({ provider }) => provider});
        background-size: cover;
    }

    &.disabled::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.color.lightGray};
        opacity: 0.4;
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
