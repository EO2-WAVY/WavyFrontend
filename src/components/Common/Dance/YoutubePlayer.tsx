import styled, { CSSProperties } from "styled-components";
import ReactPlayer from "react-player";

interface YoutubePlayerProps {
    youtubeCode: string;
}

const YoutubePlayer = ({ youtubeCode }: YoutubePlayerProps) => {
    return (
        <Wrapper>
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${youtubeCode}`}
                volume={0}
                width="100%"
                height="100%"
                style={VideoStyle}
                controls={true}
            />
        </Wrapper>
    );
};

export default YoutubePlayer;

const Wrapper = styled.aside`
    position: relative;
    height: 100%;
    aspect-ratio: 9 / 16;
    flex-shrink: 0;
    overflow: hidden;
`;

const VideoStyle: CSSProperties = {
    position: "absolute",
    top: "0",
    left: "0",
};
