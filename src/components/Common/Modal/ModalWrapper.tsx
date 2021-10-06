import { ReactNode } from "react";
import ReactDOM from "react-dom";
import { AnimatePresence } from "framer-motion";

interface ModalWrapperProps {
    children: ReactNode;
    isShowing: boolean;
}

const ModalWrapper = ({ children, isShowing }: ModalWrapperProps) =>
    ReactDOM.createPortal(
        <AnimatePresence exitBeforeEnter>
            {isShowing && children}
        </AnimatePresence>,
        document.body
    );

export default ModalWrapper;
