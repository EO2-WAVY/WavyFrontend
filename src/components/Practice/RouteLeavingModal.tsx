import { motion } from "framer-motion";
import ModalOverlay from "components/Common/Modal/ModalOverlay";
import { useState } from "react";
import { Prompt } from "react-router-dom";
import styled from "styled-components";
import ModalWrapper from "../Common/Modal/ModalWrapper";
import { modalCenterFadeInUpVariants } from "constants/motions";

interface RouteLeavingModalProps {
    when: boolean;
}

const RouteLeavingModal = ({ when }: RouteLeavingModalProps) => {
    const [isShowing, setIsShowing] = useState<boolean>(false);

    const handleBrockedNavigation = () => {
        setIsShowing(true);
        return false;
    };

    const closeModal = () => {
        setIsShowing(false);
    };

    return (
        <>
            <Prompt when={when} message={handleBrockedNavigation} />
            <ModalWrapper isShowing={isShowing}>
                <ModalOverlay key="modalOverlay" handleClose={closeModal} />
                <ModalContent
                    key="routeLeavingModal"
                    variants={modalCenterFadeInUpVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    ㅎㅇ
                    <button onClick={closeModal}>닫기</button>
                </ModalContent>
            </ModalWrapper>
        </>
    );
};

export default RouteLeavingModal;

const ModalContent = styled(motion.div)`
    position: -webkit-sticky;
    position: fixed;
    top: 50%;
    left: 50%;

    width: 530px;
    height: 600px;
    max-height: 80vh;
    background-color: white;
    border-radius: 10px;
    padding: 30px 18px 30px 18px;

    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 999;
`;
