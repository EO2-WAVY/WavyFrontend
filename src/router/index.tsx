import { BrowserRouter } from "react-router-dom";

import AnimateRouter from "./AnimateRouter";

import Nav from "components/Common/Nav";
import Footer from "components/Common/Footer";
import ScrollToTopElem from "utils/ScrollToTop";

const Router = () => {
    return (
        <BrowserRouter>
            <Nav />
            <ScrollToTopElem />
            <AnimateRouter />
            <Footer />
        </BrowserRouter>
    );
};

// no exit animation
// const Router = () => {
//     return (
//         <BrowserRouter>
//             <Nav />
//             <ScrollToTopElem />
//                 <Switch>
//                     <Route exact path="/" component={Main} />
//                     <Route path="/search" component={Search} />
//                     <Route path="/auth" component={Auth} />
//                     <Route path="/info" component={MyInfo} />
//                     <Route path="/practice" component={Practice} />
//                     <Route path="/challenge" component={Challenge} />
//                     <Route path="/analysis" component={Analysis} />
//                     <Route path="/terms/:termName" component={Terms} />
//                     <Route path="/analysis" component={Analysis} />
//                     <Route component={NotFound} />
//                 </Switch>
//             <Footer />
//         </BrowserRouter>
//     );
// };

export default Router;
