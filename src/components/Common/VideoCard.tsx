import { useState } from "react";
import ReactPlayer from "react-player";
import { AnimatePresence, motion } from "framer-motion";
import styled, { CSSProperties } from "styled-components";

import CardNav from "components/Common/CardNav";
import {
    cardOverlayVariants,
    defaultFadeInUpVariants,
} from "constants/motionUtils";

const VideoCard = () => {
    const [isHover, setIsHover] = useState<boolean>(false);

    const onHoverStart = () => {
        setIsHover(true);
    };

    const onHoverEnd = () => {
        setIsHover(false);
    };

    return (
        <Wrapper
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
            variants={defaultFadeInUpVariants}
        >
            <ReactPlayer
                url="https://www.youtube.com/watch?v=xhztxmBJ9L4"
                volume={0}
                width="100%"
                height="100%"
                style={VideoStyle}
                light={!isHover}
                playing={isHover}
                config={{
                    youtube: {
                        playerVars: { disablekb: 1 },
                    },
                }}
            />
            
            <AnimatePresence initial={false} exitBeforeEnter={true}>
                {isHover && (
                    <>
                        <Overlay
                            variants={cardOverlayVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        />
                        <CardNav />
                    </>
                )}
            </AnimatePresence>
        </Wrapper>
    );
};

export default VideoCard;

const Wrapper = styled(motion.article)`
    position: relative;
    width: 281.25px;
    height: 500px;
    border-radius: 12px;
    overflow: hidden;
`;

const Overlay = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.4;
    z-index: 1;
`;

const VideoStyle: CSSProperties = {
    position: "absolute",
    top: "0",
    left: "0",
};
