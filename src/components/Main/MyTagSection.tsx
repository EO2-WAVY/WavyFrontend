import { AnimatePresence } from "framer-motion";
import LinkSection from "components/Main/LinkSection";

const MyTagSection = () => {
    return (
        <AnimatePresence exitBeforeEnter>
            <LinkSection />
        </AnimatePresence>
    );
};

export default MyTagSection;
