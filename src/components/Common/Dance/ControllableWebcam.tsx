import ReactWebcam from "react-webcam";
import { Dispatch, SetStateAction } from "react";
import useMirrored from "hooks/Dance/Controller/useMirrored";
import { CSSProperties } from "styled-components";

interface ControllableWebcamProps {
    webcamRef?: Dispatch<SetStateAction<ReactWebcam | null>>;
}

const ControllableWebcam = ({ webcamRef }: ControllableWebcamProps) => {
    const { isMirrored } = useMirrored();

    return (
        <ReactWebcam
            mirrored={isMirrored}
            style={WebcamStyle}
            ref={webcamRef && webcamRef}
        />
    );
};

export default ControllableWebcam;

const WebcamStyle: CSSProperties = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    objectFit: "cover",
};
