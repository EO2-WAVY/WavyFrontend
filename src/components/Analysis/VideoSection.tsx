import { useEffect, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

import { userVideoRefState } from "store/Dance/Controller";
import ToggleView from "components/Analysis/ToggleView";
import RefVideoWrapper from "components/Common/Dance/RefVideoWrapper";
import ControllableWebcam from "components/Common/Dance/ControllableWebcam";
import ControllablePlayer from "components/Common/Dance/Controller/ControllablePlayer";
import useGetAnalysisUserVideo from "hooks/api/useGetAnalysisUserVideo";
import useControllerPlaying from "hooks/Dance/Controller/useControllerPlaying";
import useUserVideoPlaying from "hooks/Analysis/useUserVideoPlayingState";
import { IAnalysis } from "hooks/api/useGetAnalysis";
import { fmToSeconds } from "utils/formatting/formattingDuration";

interface VideoSectionProps {
    analysis: IAnalysis;
}

const VideoSection = ({ analysis }: VideoSectionProps) => {
    const { data } = useGetAnalysisUserVideo(analysis.anSeq);
    const { setIsPlaying } = useControllerPlaying();
    const { setIsUserVideoPlaying } = useUserVideoPlaying();

    const [isWebcamView, setIsWebcamView] = useState<boolean>(false);

    useEffect(() => {
        setIsPlaying(false);
        setIsUserVideoPlaying(false);
    }, [setIsPlaying, setIsUserVideoPlaying]);

    return (
        <AnimateSharedLayout>
            <RefVideoWrapper showLayoutBtn={false}>
                <ControllablePlayer
                    url={analysis.refVideo.rvUrl}
                    rvDuration={fmToSeconds(analysis.refVideo.rvDuration)}
                />
            </RefVideoWrapper>

            <WebcamWrapper
                layout
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <AnimatePresence exitBeforeEnter>
                    <UserWrapper
                        isWebcamView={isWebcamView}
                        data-type="webcam"
                        key="UserWebcam"
                    >
                        <ControllableWebcam />
                    </UserWrapper>

                    {data ? (
                        <UserWrapper
                            isWebcamView={isWebcamView}
                            data-type="video"
                            key="UserVideo"
                        >
                            <ControllablePlayer
                                url={data.signedUrl}
                                controllableVideoState={userVideoRefState}
                            />
                        </UserWrapper>
                    ) : (
                        ""
                    )}
                </AnimatePresence>
            </WebcamWrapper>

            <ToggleView
                isWebcamView={isWebcamView}
                setIsWebcamView={setIsWebcamView}
            />
        </AnimateSharedLayout>
    );
};

export default VideoSection;

const WebcamWrapper = styled(motion.section)`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const UserWrapper = styled.div<{ isWebcamView: boolean }>`
    position: absolute;
    width: 100%;
    height: 100%;

    transition: opacity 0.3s;

    &[data-type="webcam"] {
        opacity: ${({ isWebcamView }) => (isWebcamView ? 1 : 0)};
    }

    &[data-type="video"] {
        opacity: ${({ isWebcamView }) => (isWebcamView ? 0 : 1)};
    }
`;
