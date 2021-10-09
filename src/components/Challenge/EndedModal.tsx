import { motion } from "framer-motion";
import styled from "styled-components";
import Confetti from "react-confetti";

import ModalWrapper from "components/Common/Modal/ModalWrapper";
import ModalOverlay from "components/Common/Modal/ModalOverlay";
import { modalCenterFadeInUpVariants } from "constants/motions";
import useViewport from "hooks/useViewport";
import ModalImageWrapper from "./ModalImageWrapper";
interface EndedModalProps {
    isEnded: boolean;
}

const EndedModal = ({ isEnded }: EndedModalProps) => {
    const { width, height } = useViewport();

    return (
        <ModalWrapper isShowing={isEnded}>
            <Confetti width={width} height={height} key="confetti" />
            <ModalOverlay key="modalOverlay" handleClose={() => {}} />
            <ModalSection
                key="modalSection"
                variants={modalCenterFadeInUpVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <ModalImageWrapper />

                <Dsc>와 너무 잘 추셨는데요 !</Dsc>
                <Dsc>분석 결과를 통해 부족한 부분을 메꿔봐요</Dsc>

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

    width: 530px;
    height: 600px;
    max-height: 80vh;
    background-color: white;
    border-radius: 10px;
    padding: 80px 36px 30px 36px;

    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 999;
`;

const Dsc = styled.span`
`;