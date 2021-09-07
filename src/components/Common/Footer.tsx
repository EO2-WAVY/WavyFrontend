import { Link } from "react-router-dom";
import styled from "styled-components";
import ScrollToTop from "utils/ScrollToTop";

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterLayout>
                <Link to="/terms/utilize">이용약관</Link>
                <Link to="/terms/personal-information">개인정보처리방침</Link>

                <InfoText>
                    본 프로젝트는 SW 마에스트로 사업의 지원을 받아
                    만들어졌습니다.
                </InfoText>
                <InfoText>문의 : wavy@example.com Team EO2</InfoText>
                <button onClick={ScrollToTop}>TOP</button>
            </FooterLayout>
        </FooterWrapper>
    );
};

export default Footer;

const FooterWrapper = styled.footer`
    width: 100vw;
    height: 300px;
    background-color: gray;
`;

const FooterLayout = styled.div`
    max-width: ${({ theme }) => theme.size.maxWidth};
    height: 100%;
    margin: 0 auto;
`;

const InfoText = styled.p`
    font-size: 0.8rem;
    opacity: 0.6;
`;
