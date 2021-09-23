import styled, { CSSProperties } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import ReactPlayer from "react-player";
import { useRecoilState } from "recoil";

import { layoutState } from "store/Dance";
import { defaultBtnSwapVariants } from "constants/motions";

interface YoutubePlayerProps {
    youtubeCode: string;
}

const YoutubePlayer = ({ youtubeCode }: YoutubePlayerProps) => {
    const [layout, setLayout] = useRecoilState(layoutState);

    const onClickLayoutBig = () => {
        setLayout("drag");
    };

    const onClickLayoutSmall = () => {
        setLayout("half");
    };

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
