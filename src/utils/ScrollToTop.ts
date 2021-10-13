import useCurrentTag from "hooks/Common/useCurrentTag";
import { useEffect } from "react";
import { RouterProps, withRouter } from "react-router-dom";

export const ScrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

const ScrollToTopElem = ({ history }: RouterProps) => {
    const { currentTag } = useCurrentTag();

    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
        return () => {
            unlisten();
        };
    }, [history]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, [currentTag]);

    return null;
};

export default withRouter(ScrollToTopElem);
