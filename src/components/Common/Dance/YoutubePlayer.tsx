import { useState } from "react";
import styled, { CSSProperties } from "styled-components";

import ReactPlayer from "react-player";
import Countdown from "./Countdown";

interface YoutubePlayerProps {
    youtubeCode: string;
    isCountdown?: boolean;
    startCapture?: () => void;
}

const YoutubePlayer = ({
    youtubeCode,
    isCountdown = false,
    startCapture = () => {},
}: YoutubePlayerProps) => {
    const [isCounting, setIsCounting] = useState<boolean>(isCountdown);
    const [playing, setPlaying] = useState<boolean>(false);

    const onCountdownEnd = () => {
        startCapture();
        setIsCounting(false);
        setPlaying(true);
    };

    return (
        <>
            {isCountdown && isCounting && (
                <Countdown onCountdownEnd={onCountdownEnd} />
            )}
            
            <Overlay />

            <ReactPlayer
                key="player"
                url={`https://www.youtube.com/watch?v=${youtubeCode}`}
                volume={0}
                width="100%"
                height="100%"
                style={VideoStyle}
                playing={playing}
                controls={false}
            />
        </>
    );
};

export default YoutubePlayer;

const VideoStyle: CSSProperties = {
    position: "absolute",
    top: "0",
    left: "0",
};

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9;
`;
