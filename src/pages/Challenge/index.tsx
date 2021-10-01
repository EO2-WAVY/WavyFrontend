import styled from "styled-components";

import useCapture from "hooks/Dance/useCapture";

import RefVideoWrapper from "components/Common/Dance/RefVideoWrapper";
import Ready from "components/Common/Dance/Ready";
import YoutubePlayer from "components/Common/Dance/YoutubePlayer";
import Webcam from "components/Common/Dance/Webcam";
import { AnimateSharedLayout } from "framer-motion";

const Challenge = () => {
    const {
        setWebcamRef,
        startCapture,
        pauseCapture,
        resumeCapture,
        stopCapture,
        downloadCaptured,
    } = useCapture();

    return (
        <Wrapper>
            <AnimateSharedLayout>
                <RefVideoWrapper>
                    <Ready />

                    <YoutubePlayer
                        youtubeCode={"wGUjUztfLS8"}
                        isCountdown={true}
                        startCapture={startCapture}
                        pauseCapture={pauseCapture}
                        resumeCapture={resumeCapture}
                        stopCapture={stopCapture}
                    />
                </RefVideoWrapper>

                <Webcam webcamRef={setWebcamRef} />

                <TestWrapper>
                    <button onClick={startCapture}>start</button>
                    <button onClick={stopCapture}>stop</button>
                    <button onClick={downloadCaptured}>download</button>
                </TestWrapper>
            </AnimateSharedLayout>
        </Wrapper>
    );
};

export default Challenge;

const Wrapper = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
`;

const TestWrapper = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 300px;
    height: 100px;
    background-color: white;

    & > button {
        background: lightblue;
        padding: 5px 12px;
        margin: 10px;
    }
`;
