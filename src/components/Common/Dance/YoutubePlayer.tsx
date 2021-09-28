import { CSSProperties } from "styled-components";

import ReactPlayer from "react-player";
import Countdown from "./Countdown";

interface YoutubePlayerProps {
    youtubeCode: string;
    isCountdown?: boolean;
}

const YoutubePlayer = ({ youtubeCode, isCountdown }: YoutubePlayerProps) => {
    return (
        <>
            <Countdown />
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${youtubeCode}`}
                volume={0}
                width="100%"
                height="100%"
                style={VideoStyle}
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
