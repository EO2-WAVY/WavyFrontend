import { useState } from "react";
import styled from "styled-components";

import ReactPlayer from "react-player";
import Countdown from "./Countdown";

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
                onBuffer={pauseCapture}
                onBufferEnd={resumeCapture}
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
