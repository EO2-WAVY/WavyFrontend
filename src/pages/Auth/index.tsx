import { useState } from "react";
import styled from "styled-components";

import Nav from "components/Common/Nav";
import Footer from "components/Common/Footer";
import Header from "components/Auth/Header";
import Main from "components/Auth/Main";

const Auth = () => {
    const [kind, setKind] = useState<"회원가입" | "로그인">("로그인");

    return (
        <>
            <Nav />
            <Layout>
                <Header kind={kind} />
                <Main kind={kind} setKind={setKind} />
            </Layout>
            <Footer />
        </>
    );
};

export default Auth;

const Layout = styled.div`
    width: 100vw;
    max-width: ${({ theme }) => theme.size.maxWidth};
    height: 100vh;
    margin: 0 auto;
`;
