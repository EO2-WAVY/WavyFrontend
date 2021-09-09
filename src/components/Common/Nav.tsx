import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import NavSearch from "components/Common/NavSearch";

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
                        src="/images/logo.png"
                        alt="wavy logo"
                        onClick={onClickLogo}
                    />
                    <Link to="/">HOME</Link>
                </LeftElem>
                <RightElem>
                    <NavSearch />
                    <Link to="auth">Auth</Link>
                </RightElem>
            </Layout>
        </Navbar>
    );
};

export default Nav;

const Navbar = styled.nav`
    width: 100vw;
    height: 50px;
    background-color: gray;
`;

const Layout = styled.div`
    max-width: ${({ theme }) => theme.size.maxWidth};
    height: 100%;
    margin: 0 auto;
    padding: 0 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LeftElem = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    gap: 1vw;

    & > img {
        height: 30px;
        cursor: pointer;
    }
`;

const RightElem = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    gap: 1vw;
`;
