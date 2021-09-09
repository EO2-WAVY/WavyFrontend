import styled from "styled-components";

import Footer from "components/Common/Footer";
import Nav from "components/Common/Nav";

const Auth = () => {
    return (
        <>
            <Nav />
            <Main />
            <Footer />
        </>
    );
};

export default Auth;

const Main = styled.main`
    height: 100vh;
`;
