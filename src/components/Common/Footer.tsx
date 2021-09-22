import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import { ScrollToTop } from "utils/ScrollToTop";
import { defaultPageFadeInVariants } from "constants/motions";
import { dancePathnames } from "constants/dancePathnames";

const Footer = () => {
    const { pathname } = useLocation();

    if (dancePathnames.includes(pathname))
        return <AnimatePresence exitBeforeEnter></AnimatePresence>;

    return (
        <AnimatePresence exitBeforeEnter>
            <FooterWrapper
                variants={defaultPageFadeInVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <FooterLayout>
                    <Link to="/terms/utilize">이용약관</Link>
                    <Divider>|</Divider>
                    <Link to="/terms/personal-information">
                        개인정보처리방침
                    </Link>

                    <InfoText>
                        본 프로젝트는 SW 마에스트로 사업의 지원을 받아
                        만들어졌습니다. <br />
                        문의 : wavy@example.com Team EO2
                    </InfoText>

                    <ScrollTopBtn onClick={ScrollToTop}>
                        <img
                            src="/images/Footer/ScrollTop.svg"
                            alt="scroll to top"
                        />
                    </ScrollTopBtn>
                </FooterLayout>
            </FooterWrapper>
        </AnimatePresence>
    );
};

export default Footer;

const FooterWrapper = styled(motion.footer)`
    width: 100vw;
    height: 300px;
    padding: 80px ${({ theme }) => theme.size.layoutHorizonPadding};
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
`;

const Divider = styled.span`
    margin: 0 24px;
    padding: 0;
`;

const FooterLayout = styled.div`
    position: relative;
    max-width: ${({ theme }) => theme.size.maxWidth};
    height: 100%;
    margin: 0 auto;

    & > a {
        font-size: 1.25em;
        font-weight: 700;
    }
`;

const InfoText = styled.p`
    margin-top: 80px;
    font-size: 0.875rem;
    line-height: 24px;
    color: ${({ theme }) => theme.color.white};
`;

const ScrollTopBtn = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    transform: scale(0.9);
    transition: transform 0.3s;

    &:hover {
        transform: scale(1);
    }
`;
