import { motion } from "framer-motion";
import styled from "styled-components";
import Confetti from "react-confetti";

import ModalWrapper from "components/Common/Modal/ModalWrapper";
import ModalOverlay from "components/Common/Modal/ModalOverlay";
import { modalCenterFadeInUpVariants } from "constants/motions";
import useViewport from "hooks/useViewport";
interface EndedModalProps {
    isEnded: boolean;
}

const EndedModal = ({ isEnded }: EndedModalProps) => {
    const { width, height } = useViewport();

    return (
        <ModalWrapper isShowing={isEnded}>
            <Confetti width={width} height={height} />
            <ModalOverlay key="modalOverlay" handleClose={() => {}} />
            <ModalSection
                key="modalSection"
                variants={modalCenterFadeInUpVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                끝났당
            </ModalSection>
        </ModalWrapper>
    );
};

export default EndedModal;

const ModalSection = styled(motion.section)`
    position: -webkit-sticky;
    position: fixed;
    top: 50%;
    left: 50%;
    aspect-ratio: 9 / 10;
    height: 1000px;
    max-height: 80vh;
    background-color: white;
    border-radius: 10px;
    padding: 30px 36px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
`;
