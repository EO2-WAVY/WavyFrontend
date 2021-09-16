import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Header from "components/Auth/Header";
import Main from "components/Auth/Main";
import { defaultPageFadeInVariants } from "constants/motionUtils";

const Auth = () => {
    const [kind, setKind] = useState<"회원가입" | "로그인">("로그인");

    return (
        <Layout
            variants={defaultPageFadeInVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Header kind={kind} />
            <Main kind={kind} setKind={setKind} />
        </Layout>
    );
};

export default Auth;

const Layout = styled(motion.div)`
    width: 100vw;
    max-width: ${({ theme }) => theme.size.maxWidth};
    height: 100vh;
    margin: 0 auto;
`;
