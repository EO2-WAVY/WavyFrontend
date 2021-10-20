import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const useGa = () => {
    const location = useLocation();
    const [initialized, setInitialized] = useState<boolean>(false);

    useEffect(() => {
        if (!window.location.href.includes("localhost")) {
            ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID as string);
        }
        setInitialized(true);
    }, []);

    useEffect(() => {
        if (initialized) {
            ReactGA.pageview(location.pathname + location.search);
        }
    }, [initialized, location]);
};

export default useGa;
