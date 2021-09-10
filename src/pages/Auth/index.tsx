import { useState } from "react";
import styled from "styled-components";

import Footer from "components/Common/Footer";
import Nav from "components/Common/Nav";
import Header from "components/Auth/Header";

const Auth = () => {
    const [kind, setKind] = useState<"회원가입" | "로그인">("로그인");

    return (
        <>
            <Nav />
            <Layout>
                <Header kind={kind} />
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
