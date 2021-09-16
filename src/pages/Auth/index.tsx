import { useState } from "react";

import Header from "components/Auth/Header";
import Main from "components/Auth/Main";
import Layout from "components/Common/Layout";

const Auth = () => {
    const [kind, setKind] = useState<"회원가입" | "로그인">("로그인");

    return (
        <Layout>
            <Header kind={kind} />
            <Main kind={kind} setKind={setKind} />
        </Layout>
    );
};

export default Auth;
