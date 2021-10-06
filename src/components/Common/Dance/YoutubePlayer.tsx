import { useState } from "react";
import styled from "styled-components";

import ReactPlayer from "react-player";
import Countdown from "./Countdown";
import Notification from "components/Common/Notification";

interface YoutubePlayerProps {
    youtubeCode: string;
    isCountdown?: boolean;
    startCapture?: () => void;
    pauseCapture?: () => void;
    resumeCapture?: () => void;
    stopCapture?: () => void;
}

const YoutubePlayer = ({
    youtubeCode,
    isCountdown = false,
    startCapture = () => {},
    pauseCapture = () => {},
    resumeCapture = () => {},
    stopCapture = () => {},
}: YoutubePlayerProps) => {
    const [isCounting, setIsCounting] = useState<boolean>(isCountdown);
    const [playing, setPlaying] = useState<boolean>(false);

    const onCountdownEnd = () => {
        setIsCounting(false);
        startCapture();
        setPlaying(true);
    };

    const [isBuffer, setIsBuffer] = useState<boolean>(false);
    const onBuffer = () => {
        pauseCapture();
        setIsBuffer(true);
    };

    const onBufferEnd = () => {
        resumeCapture();
        setIsBuffer(false);
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
                playing={playing}
                controls={false}
                onEnded={stopCapture}
                onBuffer={onBuffer}
                onBufferEnd={onBufferEnd}
            />

            <Notification
                open={isBuffer}
                message="버퍼링 시에는 녹화가 중지되니 걱정 안해도 돼요 :D"
                handleClose={() => setIsBuffer(false)}
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
