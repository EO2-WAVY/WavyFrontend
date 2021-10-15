import { BrowserRouter } from "react-router-dom";

import AnimateRouter from "./AnimateRouter";

import Nav from "components/Common/Nav";
import Footer from "components/Common/Footer";
import ScrollToTopElem from "utils/ScrollToTop";
import VolumePop from "components/Common/VolumePop";

import { ErrorBoundary } from "@sentry/react";
import FullScreenError from "components/Common/HandleAsync/FullScreenError";
import NotificationWrapper from "components/Common/Notification/NotificationWrapper";
import useIsMobile from "hooks/Common/useIsMobile";
import MobileNav from "components/Common/Nav/MobileNav";

const Router = () => {
    const isMobile = useIsMobile();

    return (
        <BrowserRouter>
            {isMobile ? <MobileNav /> : <Nav />}
            <ScrollToTopElem />

            <ErrorBoundary
                fallback={({ error }) => <FullScreenError error={error} />}
            >
                <AnimateRouter />
            </ErrorBoundary>

            <Footer />

            <VolumePop />
            <NotificationWrapper />
        </BrowserRouter>
    );
};

export default Router;
