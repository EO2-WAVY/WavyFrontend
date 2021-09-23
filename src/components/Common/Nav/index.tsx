import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import NavSearchBar from "components/Common/Nav/NavSearchBar";
import NavAuthBtn from "components/Common/Nav/NavAuthBtn";
import useMousePosition from "hooks/useMousePosition";
import useNavCondition from "hooks/useNavCondition";

const Nav = () => {
    const history = useHistory();
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
                        <img
                            src="/images/logo_full.svg"
                            alt="wavy logo"
                            onClick={onClickLogo}
                        />
                        <Link to="/">HOME</Link>
                        <Link to="/">HOME</Link>
                        <Link to="/">HOME</Link>
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

    & > img {
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
