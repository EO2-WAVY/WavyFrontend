import styled from "styled-components";

import { IAnalysis } from "hooks/api/useGetAnalysis";
import ControllablePlayer from "components/Common/Dance/Controller/ControllablePlayer";
import useGetAnalysisUserVideo from "hooks/api/useGetAnalysisUserVideo";
import { userVideoRefState } from "store/Dance/Controller";

interface VideoSectionProps {
    analysis: IAnalysis;
}

const VideoSection = ({ analysis }: VideoSectionProps) => {
    const { data } = useGetAnalysisUserVideo(analysis.anSeq);

    return (
        <Wrapper>
            <ControllablePlayer url={analysis.refVideo.rvUrl} />

            {data ? (
                <ControllablePlayer
                    url={data.signedUrl}
                    controllableVideoState={userVideoRefState}
                />
            ) : (
                ""
            )}
        </Wrapper>
    );
};

export default VideoSection;

const Wrapper = styled.section`
    position: relative;
    display: flex;

    height: 500px;
`;
