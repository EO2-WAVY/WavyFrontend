import styled, { CSSProperties } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import ReactPlayer from "react-player";

import { defaultBtnSwapVariants } from "constants/motions";
import useLayout from "hooks/Dance/useLayout";

interface YoutubePlayerProps {
    youtubeCode: string;
}

const YoutubePlayer = ({ youtubeCode }: YoutubePlayerProps) => {
    const { layout, onClickLayoutBig, onClickLayoutSmall } = useLayout();

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

            <AnimatePresence exitBeforeEnter>
                {layout === "half" ? (
                    <ToBigBtn
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={onClickLayoutBig}
                        variants={defaultBtnSwapVariants}
                    />
                ) : (
                    <ToSmallBtn
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={onClickLayoutSmall}
                        variants={defaultBtnSwapVariants}
                    />
                )}
            </AnimatePresence>
        </Wrapper>
    );
};

export default YoutubePlayer;

const Wrapper = styled(motion.aside)`
    position: relative;
    height: 100%;
    aspect-ratio: 9 / 16;
    flex-shrink: 0;
    overflow: hidden;
    z-index: 1;

    /* position: absolute;
    top:0;
    left:0; */
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 85%;
        z-index: 2;
    }
`;

const VideoStyle: CSSProperties = {
    position: "absolute",
    top: "0",
    left: "0",
};

const LayoutBtn = styled(motion.button)`
    position: absolute;
    bottom: 12px;
    right: 12px;
    width: 50px;
    height: 50px;
`;

const ToBigBtn = styled(LayoutBtn)`
    background: url("/images/Dance/layout_big.svg");
    background-size: cover;
`;

const ToSmallBtn = styled(LayoutBtn)`
    background: url("/images/Dance/layout_small.svg");
    background-size: cover;
`;
