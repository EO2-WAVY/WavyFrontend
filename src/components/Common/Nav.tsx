import { Link, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import NavSearchBar from "components/Common/NavSearchBar";
import NavAuthBtn from "./NavAuthBtn";
import { navVariants } from "constants/motions";
import { dancePathnames } from "constants/dancePathnames";

const Nav = () => {
    const history = useHistory();
    const onClickLogo = () => {
        history.push("/");
    };

    const { pathname } = useLocation();
    if (dancePathnames.includes(pathname))
        return <AnimatePresence exitBeforeEnter></AnimatePresence>;

    return (
        <AnimatePresence exitBeforeEnter>
            <Navbar
                variants={navVariants}
                initial="initial"
                animate="animate"
                exit="exit"
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

const Navbar = styled(motion.nav)`
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
    width: 100vw;
    height: 104px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px 10px 25px 4px rgba(0, 0, 0, 0.03);
    z-index: 999;
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
