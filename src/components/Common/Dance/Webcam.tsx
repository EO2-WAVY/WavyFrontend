import { Dispatch, SetStateAction } from "react";
import { default as ReactWebcam } from "react-webcam";
import styled, { CSSProperties } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useRecoilValue } from "recoil";

import { layoutState, layoutType } from "store/Dance";

interface WebcamProps {
    webcamRef?: Dispatch<SetStateAction<ReactWebcam | null>>;
}

const Webcam = ({ webcamRef }: WebcamProps) => {
    const layout = useRecoilValue(layoutState);

    return (
        <AnimatePresence>
            <Wrapper layoutType={layout} layout>
                <ReactWebcam
                    mirrored={true}
                    style={WebcamStyle}
                    ref={webcamRef && webcamRef}
                />
            </Wrapper>
        </AnimatePresence>
    );
};

export default Webcam;

const Wrapper = styled(motion.section)<{ layoutType: layoutType }>`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const WebcamStyle: CSSProperties = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    objectFit: "cover",
};
