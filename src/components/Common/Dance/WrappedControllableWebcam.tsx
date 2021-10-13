import { Dispatch, SetStateAction } from "react";
import { default as ReactWebcam } from "react-webcam";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import ControllableWebcam from "./ControllableWebcam";

interface WebcamProps {
    webcamRef?: Dispatch<SetStateAction<ReactWebcam | null>>;
}

const WrappedControllableWebcam = ({ webcamRef }: WebcamProps) => {
    return (
        <AnimatePresence>
            <Wrapper layout>
                <ControllableWebcam webcamRef={webcamRef} />
            </Wrapper>
        </AnimatePresence>
    );
};

export default WrappedControllableWebcam;

const Wrapper = styled(motion.section)`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
