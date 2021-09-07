import { Link } from "react-router-dom";
import styled from "styled-components";

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
    background-color: gray;
`;

const Layout = styled.div`
    max-width: ${({ theme }) => theme.size.maxWidth};
    height: 100%;
    margin: 0 auto;
`;
