import { useEffect, useState } from "react";
import styled from "styled-components";
import { AnimateSharedLayout } from "framer-motion";

import Ready from "components/Common/Dance/Ready";
import RefVideoWrapper from "components/Common/Dance/RefVideoWrapper";
import Webcam from "components/Common/Dance/Webcam";
import YoutubePlayer from "components/Common/Dance/YoutubePlayer";

import useGetRefVideo from "hooks/api/useGetRefVideo";
import useCapture from "hooks/Dance/useCapture";
import usePostUploadVideo from "hooks/api/usePostUploadVideo";
import { fmYouTubeURLToCode } from "utils/formatting/formattingYoutubeCode";

import EndedModal from "./EndedModal";

interface ChallengeWrapperProps {
    rvSeq: string;
}

const ChallengeWrapper = ({ rvSeq }: ChallengeWrapperProps) => {
    const { data } = useGetRefVideo(rvSeq);
    const { uploadVideo } = usePostUploadVideo();
    const [isEnded, setIsEnded] = useState<boolean>(false);

    const {
        setWebcamRef,
        startCapture,
        pauseCapture,
        resumeCapture,
        stopCapture,
        getCaptured,
        dataIsAvailable,
    } = useCapture();

    const onChallengeEnded = () => {
        stopCapture();
        setIsEnded(true);
    };

    useEffect(() => {
        // 챌린지 종료됐을 시 데이터 확인 후, 서버에 업로드 및 분석 요청
        // if (!dataIsAvailable) return;

        // const capturedBlob = getCaptured();
        // if (!capturedBlob) return;

        // uploadVideo({ blob: capturedBlob, rvSeq });
    }, [dataIsAvailable, getCaptured, rvSeq, uploadVideo]);

    if (!data) return null;
    return (
        <Wrapper>
            <AnimateSharedLayout>
                <RefVideoWrapper>
                    <Ready />

                    <YoutubePlayer
                        youtubeCode={fmYouTubeURLToCode(data.refVideo.rvUrl)}
                        isCountdown={true}
                        startCapture={startCapture}
                        pauseCapture={pauseCapture}
                        resumeCapture={resumeCapture}
                        onEnded={onChallengeEnded}
                    />
                </RefVideoWrapper>

                <Webcam webcamRef={setWebcamRef} />
            </AnimateSharedLayout>

            <EndedModal isEnded={isEnded} />
        </Wrapper>
    );
};

export default ChallengeWrapper;

const Wrapper = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
`;
