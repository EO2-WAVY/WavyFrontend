import styled from "styled-components";

import useCapture from "hooks/Dance/useCapture";

import RefVideoWrapper from "components/Common/Dance/RefVideoWrapper";
import Step from "components/Common/Step";
import Ready from "components/Common/Dance/Ready";
import YoutubePlayer from "components/Common/Dance/YoutubePlayer";
import Webcam from "components/Common/Dance/Webcam";
import { AnimateSharedLayout } from "framer-motion";

const Challenge = () => {
    const { setWebcamRef, startCapture, stopCapture, downloadCaptured } =
        useCapture();

    return (
        <Wrapper>
            <AnimateSharedLayout>
            <RefVideoWrapper>
                <Step>
                    <Ready />
                    <YoutubePlayer
                        youtubeCode={"yCM4vEcDs_s"}
                        isCountdown={true}
                        startCapture={startCapture}
                    />
                </Step>
            </RefVideoWrapper>

            <Webcam webcamRef={setWebcamRef} />
            {/* <button onClick={startCapture}>start</button>
            <button onClick={stopCapture}>stop</button>
            <button onClick={downloadCaptured}>download</button> */}
            </AnimateSharedLayout>
        </Wrapper>
    );
};

export default Challenge;

const Wrapper = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;

    & > button {
        background: green;
        margin: 10px;
    }
`;
