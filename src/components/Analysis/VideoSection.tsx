import { useEffect } from "react";
import styled from "styled-components";
import { AnimateSharedLayout, motion } from "framer-motion";

import { userVideoRefState } from "store/Dance/Controller";
import RefVideoWrapper from "components/Common/Dance/RefVideoWrapper";
import ControllableWebcam from "components/Common/Dance/ControllableWebcam";
import ControllablePlayer from "components/Common/Dance/Controller/ControllablePlayer";
import useGetAnalysisUserVideo from "hooks/api/useGetAnalysisUserVideo";
import useControllerPlaying from "hooks/Dance/Controller/useControllerPlaying";
import useUserVideoPlaying from "hooks/Analysis/useUserVideoPlayingState";
import { IAnalysis } from "hooks/api/useGetAnalysis";

interface VideoSectionProps {
    analysis: IAnalysis;
}

const VideoSection = ({ analysis }: VideoSectionProps) => {
    const { data } = useGetAnalysisUserVideo(analysis.anSeq);
    const { setIsPlaying } = useControllerPlaying();
    const { setIsUserVideoPlaying } = useUserVideoPlaying();

    useEffect(() => {
        setIsPlaying(false);
        setIsUserVideoPlaying(false);
    }, [setIsPlaying, setIsUserVideoPlaying]);

    return (
        <AnimateSharedLayout>
            <RefVideoWrapper showLayoutBtn={false}>
                <ControllablePlayer url={analysis.refVideo.rvUrl} />
            </RefVideoWrapper>

            <WebcamWrapper layout>
                {data ? (
                    <ControllablePlayer
                        url={data.signedUrl}
                        controllableVideoState={userVideoRefState}
                    />
                ) : (
                    ""
                )}

                {/* <ControllableWebcam /> */}
            </WebcamWrapper>
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
