import { MouseEvent } from "react";
import styled from "styled-components";
import ModalWrapper from "components/Modal/ModalWrapper";
import { motion } from "framer-motion";
import {
    defaultFadeInUpVariants,
    modalCenterFadeInUpVariants,
    modalOverlayVariants,
} from "constants/motions";

interface PersonalInfoModalProps {
    isShowing: boolean;
    hide: VoidFunction;
}

const PersonalInfoModal = ({ isShowing, hide }: PersonalInfoModalProps) => {
    return (
        <ModalWrapper isShowing={isShowing}>
            <Overlay
                onClick={hide}
                key="modalOverlay"
                variants={modalOverlayVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            />
            <ModalSection
                key="modalSection"
                variants={modalCenterFadeInUpVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            ></ModalSection>
        </ModalWrapper>
    );
};

export default PersonalInfoModal;

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

const ModalSection = styled(motion.section)`
    position: -webkit-sticky;
    position: fixed;
    top: 50%;
    left: 50%;
    /* transform: translate(-50%, -50%); */

    width: 800px;
    height: 1000px;
    max-height: 80vh;
    background-color: white;
    z-index: 999;
`;
