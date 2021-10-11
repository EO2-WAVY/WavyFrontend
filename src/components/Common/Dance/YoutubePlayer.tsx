import { useState } from "react";
import styled from "styled-components";

import ReactPlayer from "react-player";
import Countdown from "./Countdown";
import useNotification from "hooks/useNotification";
import useIsChallengeVideoPlaying from "hooks/Challenge/useIsChallengeVideoPlaying";

interface YoutubePlayerProps {
    youtubeCode: string;
    isCountdown?: boolean;
    startCapture?: () => void;
    pauseCapture?: () => void;
    resumeCapture?: () => void;
    onEnded?: () => void;
}

const YoutubePlayer = ({
    youtubeCode,
    isCountdown = false,
    startCapture = () => {},
    pauseCapture = () => {},
    resumeCapture = () => {},
    onEnded = () => {},
}: YoutubePlayerProps) => {
    const [isCounting, setIsCounting] = useState<boolean>(isCountdown);

    const { isPlaying, setIsPlaying } = useIsChallengeVideoPlaying();

    const onCountdownEnd = () => {
        setIsCounting(false);
        startCapture();
        setIsPlaying(true);
    };

    // ChallengeWrapper에서 setIsPlaying 사용 시, 시작할 때 드래그 위치 초기화 때문에
    // 해당 컴포넌트에서 확장하여 사용
    const onEndedExtend = () => {
        onEnded();
        setIsPlaying(false);
    };

    const { addNotification } = useNotification();

    const onBuffer = () => {
        pauseCapture();
        addNotification({
            title: "걱정하지 마세요 !",
            description: "버퍼링 시 녹화는 일시 중지됩니다 :D",
        });
    };

    const onBufferEnd = () => {
        resumeCapture();
    };

    return (
        <>
            {isCountdown && isCounting && (
                <Countdown onCountdownEnd={onCountdownEnd} />
            )}

            <Overlay />

            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${youtubeCode}`}
                volume={0}
                width="100%"
                height="100%"
                playing={isPlaying}
                controls={false}
                onEnded={onEndedExtend}
                onBuffer={onBuffer}
                onBufferEnd={onBufferEnd}
            />
        </>
    );
};

export default YoutubePlayer;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9;
`;
