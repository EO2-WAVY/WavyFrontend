import styled from "styled-components";
// import Webcam from "react-webcam";

import { IAnalysis } from "hooks/api/useGetAnalysis";
import ControllablePlayer from "components/Common/Dance/Controller/ControllablePlayer";
import useGetAnalysisUserVideo from "hooks/api/useGetAnalysisUserVideo";
import { userVideoRefState } from "store/Dance/Controller";
import useControllerPlaying from "hooks/Dance/Controller/useControllerPlaying";
import useUserVideoPlaying from "hooks/Analysis/useUserVideoPlayingState";
import { useEffect } from "react";
import { AnimateSharedLayout } from "framer-motion";
import Webcam from "components/Common/Dance/Webcam";
import RefVideoWrapper from "components/Common/Dance/RefVideoWrapper";

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

            <WebcamWrapper>
            {/* {data ? (
                <ControllablePlayer
                    url={data.signedUrl}
                    controllableVideoState={userVideoRefState}
                />
            ) : (
                ""
            )} */}

            </WebcamWrapper>
            {/* <Webcam /> */}
        </AnimateSharedLayout>
    );
};

export default VideoSection;

const WebcamWrapper = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
