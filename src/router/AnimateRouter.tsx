import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// pages
import Main from "pages/Main";
import Search from "pages/Search";
import Auth from "pages/Auth";
import KakaoRedirect from "pages/Auth/KakaoRedirect";
import SignUpTerm from "pages/SignUpTerm";
import Setting from "pages/Setting";
import Practice from "pages/Practice";
import Link from "pages/Link";
import Challenge from "pages/Challenge";
import Analysis from "pages/Analysis";
import NotFound from "pages/NotFound";
import Terms from "pages/Terms";
import Review from "pages/Review";
import Storage from "pages/Storage";

import useIsUserSignedIn from "hooks/Common/useIsUserSignedIn";
// for google analytics
import useGa from "hooks/Common/useGa";
import React, { ReactNode, useCallback } from "react";

const AnimateRouter = () => {
    useGa();

    const location = useLocation();
    const { isUserSignedIn } = useIsUserSignedIn();

    const pushRootWhenSignedIn = useCallback(
        (Page: ReactNode): ReactNode =>
            isUserSignedIn ? <Redirect to="/" /> : Page,
        [isUserSignedIn]
    );

    const pushRootWhenNotSignedIn = useCallback(
        (Page: ReactNode): ReactNode =>
            !isUserSignedIn ? <Redirect to="/" /> : Page,
        [isUserSignedIn]
    );

    return (
        <AnimatePresence initial exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={Main} />
                <Route path="/search" component={Search} />
                <Route
                    path="/login"
                    render={() => pushRootWhenSignedIn(<Auth />)}
                />
                <Route
                    exact
                    path="/signup"
                    render={() => pushRootWhenSignedIn(<Auth />)}
                />
                <Route
                    exact
                    path="/auth/kakaoLoginRedirect"
                    render={() => pushRootWhenSignedIn(<KakaoRedirect />)}
                />
                <Route
                    path="/signup/term"
                    render={() => pushRootWhenSignedIn(<SignUpTerm />)}
                />
                <Route
                    path="/setting"
                    render={() => pushRootWhenNotSignedIn(<Setting />)}
                />
                <Route path="/practice" component={Practice} />
                <Route path="/link" component={Link} />
                <Route path="/challenge" component={Challenge} />
                <Route
                    path="/storage"
                    render={() => pushRootWhenNotSignedIn(<Storage />)}
                />
                <Route
                    path="/review"
                    render={() => pushRootWhenNotSignedIn(<Review />)}
                />

                <Route path="/analysis" component={Analysis} />
                <Route path="/terms/:termName" component={Terms} />
                <Route component={NotFound} />
            </Switch>
        </AnimatePresence>
    );
};

export default AnimateRouter;
