import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// pages
import Main from "pages/Main";
import Search from "pages/Search";
import Auth from "pages/Auth";
import KakaoRedirect from "pages/Auth/KakaoRedirect";
import SignUpTerm from "pages/SignUpTerm";
import MyInfo from "pages/MyInfo";
import Practice from "pages/Practice";
import Link from "pages/Link";
import Challenge from "pages/Challenge";
import Analysis from "pages/Analysis";
import NotFound from "pages/NotFound";
import Terms from "pages/Terms";
import Review from "pages/Review";

import useIsUserSignedIn from "hooks/useIsUserSignedIn";

const AnimateRouter = () => {
    const location = useLocation();
    const isUserSignedIn = useIsUserSignedIn();

    const pushRootWhenSignedIn = (Page: JSX.Element) =>
        isUserSignedIn ? <Redirect to="/" /> : Page;

    const pushRootWhenNotSignedIn = (Page: JSX.Element) =>
        !isUserSignedIn ? <Redirect to="/" /> : Page;

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
                    path="/info"
                    render={() => pushRootWhenNotSignedIn(<MyInfo />)}
                />
                <Route path="/practice" component={Practice} />
                <Route path="/link" component={Link} />
                <Route path="/challenge" component={Challenge} />

                <Route
                    path="/review"
                    component={() => pushRootWhenNotSignedIn(<Review />)}
                />

                <Route path="/analysis" component={Analysis} />
                <Route path="/terms/:termName" component={Terms} />
                <Route component={NotFound} />
            </Switch>
        </AnimatePresence>
    );
};

export default AnimateRouter;
