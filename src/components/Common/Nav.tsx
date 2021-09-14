import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import NavSearchBar from "components/Common/NavSearchBar";
import NavAuthBtn from "./NavAuthBtn";

const Nav = () => {
    const history = useHistory();
    const onClickLogo = () => {
        history.push("/");
    };

    return (
        <Navbar>
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
    );
};

export default Nav;

const Navbar = styled.nav`
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
