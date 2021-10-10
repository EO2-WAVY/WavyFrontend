import { useEffect, useState } from "react";
import { Prompt, useHistory } from "react-router-dom";

import { Location } from "history";
import ModalOverlay from "components/Common/Modal/ModalOverlay";
import ModalWrapper from "components/Common/Modal/ModalWrapper";

import RouteLeavingModalContent from "./RouteLeavingModalContent";

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
            <Prompt
                key="prompt"
                when={when}
                message={handleBlockedNavigation}
            />
            <ModalWrapper isShowing={isShowing}>
                <ModalOverlay key="modalOverlay" handleClose={closeModal} />

                {/* 여기서 로그인 상태에 따라 다르게 호출하자 */}
                <RouteLeavingModalContent
                    key="modalContent"
                    closeModal={closeModal}
                    handleConfirm={handleConfirm}
                />
            </ModalWrapper>
        </>
    );
};

export default RouteLeavingModal;
