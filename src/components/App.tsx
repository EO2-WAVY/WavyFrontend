import GlobalStyle from "styles/global";
import Router from "router";
import Mobile from "pages/Mobile";
import useViewport from "hooks/useViewport";
import useCheckCurrentMember from "hooks/api/useCheckCurrentMember";

import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
    dsn: process.env.REACT_APP_SENTRY_DSN,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
});

function App() {
    const { width } = useViewport();
    useCheckCurrentMember();

    return (
        <>
            <GlobalStyle />
            {width > 700 ? <Router /> : <Mobile />}
        </>
    );
}

export default App;
