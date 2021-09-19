import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// pages
import Main from "pages/Main";
import Search from "pages/Search";
import Auth from "pages/Auth";
import MyInfo from "pages/MyInfo";
import Practice from "pages/Practice";
import Challenge from "pages/Challenge";
import Analysis from "pages/Analysis";
import NotFound from "pages/NotFound";
import Terms from "pages/Terms";

import Nav from "components/Common/Nav";
import Footer from "components/Common/Footer";
import ScrollToTopElem from "utils/ScrollToTop";

const AnimateRouter = () => {
    const location = useLocation();

    return (
        <AnimatePresence initial exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
                <Route exact path="/" component={Main} />
                <Route path="/search" component={Search} />
                <Route path="/auth" component={Auth} />
                <Route path="/info" component={MyInfo} />
                <Route path="/practice" component={Practice} />
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