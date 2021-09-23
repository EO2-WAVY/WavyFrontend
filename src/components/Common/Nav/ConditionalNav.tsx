import { defaultFadeInUpVariants } from "constants/motions";
import { AnimatePresence, motion } from "framer-motion";

const ConditionalNav = () => {
    return (
        <motion.div
            variants={defaultFadeInUpVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        ></motion.div>
    );
};

export default ConditionalNav;
