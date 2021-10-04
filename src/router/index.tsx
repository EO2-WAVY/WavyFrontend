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
            {/* <AsyncBoundary
                rejectedFallback={() => <div></div>}
                pendingFallback={() => <div></div>}
            > */}
                <AnimateRouter />
            {/* </AsyncBoundary> */}
            <Footer />
        </BrowserRouter>
    );
};

export default Router;
