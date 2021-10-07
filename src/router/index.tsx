import { BrowserRouter } from "react-router-dom";

import AnimateRouter from "./AnimateRouter";

import Nav from "components/Common/Nav";
import Footer from "components/Common/Footer";
import ScrollToTopElem from "utils/ScrollToTop";
import VolumePop from "components/Common/VolumePop";

import { ErrorBoundary } from "@sentry/react";
import FullScreenError from "components/Common/FullScreenError";

const Router = () => {
    return (
        <BrowserRouter>
            <Nav />
            <ScrollToTopElem />
            <ErrorBoundary
                fallback={({ error }) => <FullScreenError error={error} />}
            >
                <AnimateRouter />
            </ErrorBoundary>
            <Footer />
            <VolumePop />
        </BrowserRouter>
    );
};

export default Router;
