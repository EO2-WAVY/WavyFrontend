import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import NavSearchBar from "components/Common/Nav/NavSearchBar";
import NavAuthBtn from "components/Common/Nav/NavAuthBtn";
import useMousePosition from "hooks/Common/useMousePosition";
import useNavCondition from "hooks/Common/useNavCondition";
import Icon from "components/Common/Icon";
import useIsUserSignedIn from "hooks/Common/useIsUserSignedIn";

const Nav = () => {
    const history = useHistory();
    const { isUserSignedIn } = useIsUserSignedIn();
    const onClickLogo = () => history.push("/");

    const { mousePosition } = useMousePosition();
    const { isConditional } = useNavCondition();

    return (
        <AnimatePresence exitBeforeEnter>
            <Navbar
                isConditional={isConditional}
                isHover={mousePosition.y < 104}
            >
                <Layout>
                    <LeftElem>
                        <Icon name="common_logo_full" onClick={onClickLogo} />
                        <Link to="/">홈</Link>
                        {isUserSignedIn && (
                            <>
                                <Link to="/review">리뷰</Link>
                                <Link to="/">보관함</Link>
                            </>
                        )}
                    </LeftElem>
                    <RightElem>
                        <NavSearchBar />
                        <NavAuthBtn />
                    </RightElem>
                </Layout>
            </Navbar>
        </AnimatePresence>
    );
};

export default Nav;

interface NavbarProps {
    isConditional: boolean;
    isHover: boolean;
}

const Navbar = styled(motion.nav)<NavbarProps>`
    position: ${({ isConditional }) => (isConditional ? "absolute" : "sticky")};
    top: 0px;
    width: 100vw;
    height: 104px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px 10px 25px 4px rgba(0, 0, 0, 0.03);
    z-index: 10;

    transition: transform 0.8s cubic-bezier(0.6, -0.05, 0.01, 0.99);
    transform: translateY(
        ${({ isHover, isConditional }) => {
            if (!isConditional) return "0";
            else if (isConditional && isHover) return "0";
            return "-104px";
        }}
    );
`;

const Layout = styled.div`
    max-width: ${({ theme }) => theme.size.maxWidth};
    width: 100vw;
    height: 100%;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.size.layoutHorizonPadding};

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LeftElem = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    gap: 40px;

    & > svg {
        cursor: pointer;
    }

    & > a {
        color: ${({ theme }) => theme.color.gray};
        text-transform: uppercase;
    }
`;

const RightElem = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    gap: 1vw;
`;
