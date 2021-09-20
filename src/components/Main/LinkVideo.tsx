import { useState, useRef } from "react";
import ReactPlayer from "react-player";
import styled, { CSSProperties } from "styled-components";

import useIntersectionObserver from "hooks/useIntersectionObserver";

interface LinkVideoProps {
    url: string;
}

const LinkVideo = ({ url }: LinkVideoProps) => {
    const [isIntersect, setIsIntersect] = useState<boolean>(false);

    const onIntersect: IntersectionObserverCallback = ([
        { isIntersecting },
    ]) => {
        setIsIntersect(isIntersecting);
    };

    const { setTarget } = useIntersectionObserver({ onIntersect });

    return (
        <VideoWrapper ref={setTarget}>
            <VideoOverlay />
            <ReactPlayer
                url={url}
                volume={0}
                width="100%"
                height="100%"
                style={VideoStyle}
                light={!isIntersect}
                playing={isIntersect}
                loop={true}
                config={{
                    youtube: {
                        playerVars: { disablekb: 1 },
                    },
                }}
            />
        </VideoWrapper>
    );
};

export default LinkVideo;

const VideoWrapper = styled.div`
    position: absolute;
    left: 0;
    aspect-ratio: 9 / 16;
    width: 200px;
    background-color: red;
    opacity: 1;
`;

const VideoOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
`;

const VideoStyle: CSSProperties = {
    position: "absolute",
    top: "0",
    left: "0",
};
