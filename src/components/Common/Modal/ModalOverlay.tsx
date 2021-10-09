import { modalOverlayVariants } from "constants/motions";
import { motion } from "framer-motion";
import styled from "styled-components";

interface ModalOverlayProps {
    handleClose: () => void;
}

const ModalOverlay = ({ handleClose }: ModalOverlayProps) => {
    return (
        <Overlay
            onClick={handleClose}
            variants={modalOverlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        />
    );
};

export default ModalOverlay;

const Overlay = styled(motion.div)`
    position: -webkit-sticky;
    position: fixed;
    top: 0px;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.color.black};
    z-index: 998;
`;
