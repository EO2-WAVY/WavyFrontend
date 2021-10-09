import { useEffect, useState } from "react";
import { Prompt, useHistory } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Location } from "history";
import ModalOverlay from "components/Common/Modal/ModalOverlay";
import ModalWrapper from "components/Common/Modal/ModalWrapper";

import { modalCenterFadeInUpVariants } from "constants/motions";
interface RouteLeavingModalProps {
    when: boolean;
}

const RouteLeavingModal = ({ when }: RouteLeavingModalProps) => {
    const history = useHistory();
    const [isShowing, setIsShowing] = useState<boolean>(false);
    const [lastLocation, setLastLocation] = useState<Location | null>(null);
    const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

    const handleBlockedNavigation = (lastLocation: Location) => {
        if (isConfirmed) return true;

        setLastLocation(lastLocation);
        setIsShowing(true);
        return false;
    };

    const closeModal = () => {
        setIsShowing(false);
    };

    const handleConfirm = () => {
        setIsConfirmed(true);
        closeModal();
        if (lastLocation) {
            console.log(lastLocation);
            history.push(lastLocation);
        }
    };

    useEffect(() => {
        if (!isConfirmed) return;
        if (!lastLocation) return;
        history.push(lastLocation);
    }, [history, isConfirmed, lastLocation]);

    return (
        <>
            <Prompt when={when} message={handleBlockedNavigation} />
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
                    <button onClick={handleConfirm}>그냥나갈래</button>
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
