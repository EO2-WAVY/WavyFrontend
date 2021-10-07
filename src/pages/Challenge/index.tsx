import styled from "styled-components";

import { useHistory } from "react-router";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

import RefVideoWrapper from "components/Common/Dance/RefVideoWrapper";
import Ready from "components/Common/Dance/Ready";
import YoutubePlayer from "components/Common/Dance/YoutubePlayer";
import Webcam from "components/Common/Dance/Webcam";
import MotionLoading from "components/Common/MotionLoading";
import { fmYouTubeURLToCode } from "utils/formatting/formattingYoutubeCode";

import useCapture from "hooks/Dance/useCapture";
import useGetRefVideo from "hooks/api/useGetRefVideo";
import { useRouterQuery } from "hooks/useRouterQuery";
import { RQ_REF_VIDEO_ID } from "constants/routerQuery";

const Challenge = () => {
    const {
        setWebcamRef,
        startCapture,
        pauseCapture,
        resumeCapture,
        stopCapture,
        downloadCaptured,
    } = useCapture();

    const history = useHistory();
    const rvSeq = useRouterQuery(RQ_REF_VIDEO_ID);
    const { data } = useGetRefVideo(rvSeq);

    if (!rvSeq) {
        history.push("/");
        return <></>;
    }

    return (
        <AnimatePresence exitBeforeEnter>
            {data ? (
                <Wrapper>
                    <AnimateSharedLayout>
                        <RefVideoWrapper>
                            <Ready />

                            <YoutubePlayer
                                youtubeCode={fmYouTubeURLToCode(
                                    data.refVideo.rvUrl
                                )}
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
            ) : (
                <MotionLoading key="motionLoading" />
            )}
        </AnimatePresence>
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
