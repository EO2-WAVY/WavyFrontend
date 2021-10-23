import { useEffect, useState } from "react";
import { Prompt, useHistory } from "react-router-dom";

import { Location } from "history";
import ModalOverlay from "components/Common/Modal/ModalOverlay";
import ModalWrapper from "components/Common/Modal/ModalWrapper";
import RouteLeavingModalContent from "./RouteLeavingModalContent";
import useIsUserSignedIn from "hooks/Common/useIsUserSignedIn";
import useControllerPlaying from "hooks/Dance/Controller/useControllerPlaying";

const RouteLeavingModal = () => {
    const history = useHistory();
    const [isShowing, setIsShowing] = useState<boolean>(false);
    const [lastLocation, setLastLocation] = useState<Location | null>(null);
    const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

    const { isUserSignedIn } = useIsUserSignedIn();
    const { setIsPlaying } = useControllerPlaying();

    const handleBlockedNavigation = (lastLocation: Location) => {
        if (isConfirmed) return true;

        setLastLocation(lastLocation);
        setIsShowing(true);
        setIsPlaying(false);
        return false;
    };

    const closeModal = () => {
        setIsShowing(false);
    };

    const handleConfirm = () => {
        setIsConfirmed(true);
        closeModal();
        if (lastLocation) {
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
                when={isUserSignedIn}
                message={handleBlockedNavigation}
            />
            <ModalWrapper isShowing={isShowing}>
                <ModalOverlay key="modalOverlay" handleClose={closeModal} />

                <RouteLeavingModalContent
                    key="modalContent"
                    closeModal={closeModal}
                    handleConfirm={handleConfirm}
                    setIsConfirmed={setIsConfirmed}
                />
            </ModalWrapper>
        </>
    );
};

export default RouteLeavingModal;
