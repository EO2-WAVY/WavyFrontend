import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// pages
import Main from "pages/Main";
import Search from "pages/Search";
import Auth from "pages/Auth";
import SignUpTerm from "pages/SignUpTerm";
import MyInfo from "pages/MyInfo";
import Practice from "pages/Practice";
import Link from "pages/Link";
import Challenge from "pages/Challenge";
import Analysis from "pages/Analysis";
import NotFound from "pages/NotFound";
import Terms from "pages/Terms";

const AnimateRouter = () => {
    const location = useLocation();

    return (
        <AnimatePresence initial exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={Main} />
                <Route path="/search" component={Search} />
                <Route path="/login" component={Auth} />
                <Route exact path="/signup" component={Auth} />
                <Route path="/signup/term" component={SignUpTerm} />
                <Route path="/info" component={MyInfo} />
                <Route path="/practice" component={Practice} />
                <Route path="/link" component={Link} />
                <Route path="/challenge" component={Challenge} />
                <Route path="/analysis" component={Analysis} />
                <Route path="/terms/:termName" component={Terms} />
                <Route path="/analysis" component={Analysis} />
                <Route component={NotFound} />
            </Switch>
        </AnimatePresence>
    );
};

export default AnimateRouter;
