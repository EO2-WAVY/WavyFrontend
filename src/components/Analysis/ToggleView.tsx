import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Icon from "components/Common/Icon";
import { defaultFadeInUpVariants } from "constants/motions";

interface ToggleViewProps {
    isWebcamView: boolean;
    setIsWebcamView: Dispatch<SetStateAction<boolean>>;
}

const ToggleView = ({ isWebcamView, setIsWebcamView }: ToggleViewProps) => {
    const toggleIsWebcamView = () => {
        setIsWebcamView((prev) => !prev);
    };

    return (
        <Wrapper
            variants={defaultFadeInUpVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={toggleIsWebcamView}
        >
            <Icon
                name="analysis_recorded"
                className={`${!isWebcamView && "disable"}`}
            />
            <Icon
                name="analysis_webcam"
                className={`${isWebcamView && "disable"}`}
            />
        </Wrapper>
    );
};

export default ToggleView;

const Wrapper = styled(motion.div)`
    position: fixed;
    bottom: 60px;
    right: 18px;

    width: 80px;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    & > svg {
        position: absolute;
        transition: transform 0.3s, opacity 0.3s;
    }

    & > .disable {
        transform: translate(50%, 50%) scale(0.6);
        opacity: 0.8;
    }
`;
