import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import Header from "components/Auth/Header";
import Main from "components/Auth/Main";
import Layout from "components/Common/Layout";
import useDecideUserPush from "hooks/api/Auth/useDecideUserPush";

const Auth = () => {
    const history = useHistory();
    const location = useLocation();
    const [kind, setKind] = useState<"회원가입" | "로그인">("로그인");
    
    useDecideUserPush();

    useEffect(() => {
        const { pathname } = location;
        if (pathname === "/signup") setKind("회원가입");
        else if (pathname === "/login") setKind("로그인");
        else history.push("/");
    }, [history, location]);

    return (
        <Layout>
            <Header kind={kind} />
            <Main kind={kind} />
        </Layout>
    );
};

export default Auth;
