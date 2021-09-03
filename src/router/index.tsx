import { BrowserRouter, Switch, Route } from "react-router-dom";

// pages
import Main from "pages/Main";
import Auth from "pages/Auth";
import MyInfo from "pages/MyInfo";
import Practice from "pages/Practice";
import Challenge from "pages/Challenge";
import Analysis from "pages/Analysis";
import NotFound from "pages/NotFound";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/auth" component={Auth} />
                <Route path="/info" component={MyInfo} />
                <Route path="/practice" component={Practice} />
                <Route path="/challenge" component={Challenge} />
                <Route path="/analysis" component={Analysis} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
