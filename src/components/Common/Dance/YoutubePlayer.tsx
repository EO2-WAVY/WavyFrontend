import { CSSProperties } from "styled-components";

import ReactPlayer from "react-player";

interface YoutubePlayerProps {
    youtubeCode: string;
}

const YoutubePlayer = ({ youtubeCode }: YoutubePlayerProps) => {
    return (
        <ReactPlayer
            url={`https://www.youtube.com/watch?v=${youtubeCode}`}
            volume={0}
            width="100%"
            height="100%"
            style={VideoStyle}
            controls={true}
        />
    );
};

export default YoutubePlayer;

const VideoStyle: CSSProperties = {
    position: "absolute",
    top: "0",
    left: "0",
};
