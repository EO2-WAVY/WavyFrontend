import { useEffect } from "react";
import ReactGA from "react-ga";
import styled from "styled-components";
import { motion } from "framer-motion";
import Icon from "components/Common/Icon";
import {
    defaultFadeInUpVariants,
    mobileLogoAnimationVariants,
    staggerOne,
} from "constants/motions";

const MoblieNotSupport = () => {
    useEffect(() => {
        ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID as string);
        ReactGA.pageview("/mobile");
    }, []);

    return (
        <Wrapper
            variants={staggerOne}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <section>
                <StyledH1 variants={defaultFadeInUpVariants}>
                    죄송합니다
                </StyledH1>
                <StyledH2 variants={defaultFadeInUpVariants}>
                    현재 Wavy는
                    <br />
                    모바일 환경을
                    <br />
                    지원하고 있지 않습니다
                </StyledH2>
            </section>

            <LogoWrapper variants={mobileLogoAnimationVariants}>
                <Icon name="common_logo_small" className="logo" />
            </LogoWrapper>

            <StyledP variants={defaultFadeInUpVariants}>
                내가 배우고 싶었던 춤을 집에서, <br />
                쉽게 배울 수 있는 <strong>Wavy</strong>는 현재 모바일 환경을
                지원하기 위해 노력하고 있습니다.
                <br />
                조금만 기달려주세요!
            </StyledP>
        </Wrapper>
    );
};

export default MoblieNotSupport;

const Wrapper = styled(motion.main)`
    width: 100vw;
    height: 100vh;
    padding: 8% 6% 20% 6%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`;

const StyledH1 = styled(motion.h1)`
    color: ${({ theme }) => theme.color.lightPurple};
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
`;

const StyledH2 = styled(motion.h2)`
    font-size: 28px;
    font-weight: 700;
    line-height: 1.4;
    word-break: keep-all;
    white-space: pre-wrap;
`;

const LogoWrapper = styled(motion.div)`
    width: 200px;
    align-self: center;

    & > .logo {
        width: 100%;
        height: auto;
    }
`;

const StyledP = styled(motion.p)`
    font-size: 17px;
    word-break: keep-all;
    white-space: pre-wrap;

    & > strong {
        color: ${({ theme }) => theme.color.purple};
    }
`;
