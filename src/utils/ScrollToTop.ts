import { useEffect } from "react";
import { RouterProps, withRouter } from "react-router-dom";

export const ScrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

const ScrollToTopElem = ({ history }: RouterProps) => {
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        };
    }, [history]);

    return null;
};

export default withRouter(ScrollToTopElem);
