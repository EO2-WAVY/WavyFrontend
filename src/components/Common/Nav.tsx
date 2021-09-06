import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "styles/theme";

const Nav = () => {
    return (
        <Navbar>
            <Layout>
                <Link to="auth">Auth</Link>
            </Layout>
        </Navbar>
    );
};

export default Nav;

const Navbar = styled.nav`
    width: 100vw;
    height: 50px;
`;

const Layout = styled.div`
    margin: 0 auto;
    max-width: ${theme.size.maxWidth};
    height: 100%;
    background-color: gray;
`;
