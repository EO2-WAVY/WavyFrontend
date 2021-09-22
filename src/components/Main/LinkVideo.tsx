import { useState } from "react";
import ReactPlayer from "react-player";
import styled, { CSSProperties } from "styled-components";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import useIntersectionObserver from "hooks/useIntersectionObserver";
import { defaultFadeInUpVariants } from "constants/motions";

interface LinkVideoProps {
    url: string;
    right?: number;
    inputRange?: number[];
    outputRange?: number[];
}

const LinkVideo = ({
    url,
    right = 0,
    inputRange = [0, 0],
    outputRange = [0, 0],
}: LinkVideoProps) => {
    const [isIntersect, setIsIntersect] = useState<boolean>(false);

    const onIntersect: IntersectionObserverCallback = ([
        { isIntersecting },
    ]) => {
        setIsIntersect(isIntersecting);
    };

    const { setTarget } = useIntersectionObserver({ onIntersect });

    const { scrollYProgress } = useViewportScroll();
    const yAnim = useTransform(scrollYProgress, inputRange, outputRange);

    return (
        <VideoWrapper
            ref={setTarget}
            right={right}
            style={{ translateY: yAnim }}
            variants={defaultFadeInUpVariants}
        >
            <VideoOverlay />
            <ReactPlayer
                url={url}
                volume={0}
                width="100%"
                height="100%"
                style={VideoStyle}
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

interface VideoWrapperProps {
    right: number;
}

const VideoWrapper = styled(motion.div)<VideoWrapperProps>`
    position: absolute;
    top: 0;
    right: ${({ right }) => right}px;

    aspect-ratio: 9 / 16;
    width: 200px;
    background-color: red;
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
