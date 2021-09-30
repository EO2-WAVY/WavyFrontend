import { useState } from "react";
import ReactPlayer from "react-player";
import { AnimatePresence, motion } from "framer-motion";
import styled, { CSSProperties } from "styled-components";

import CardInfo from "components/Common/CardInfo";
import {
    cardOverlayVariants,
    defaultFadeInUpVariants,
} from "constants/motions";

const VideoCard = () => {
    const [isHover, setIsHover] = useState<boolean>(false);

    const onHoverStart = () => {
        setIsHover(true);
    };

    const onHoverEnd = () => {
        setIsHover(false);
    };

    return (
        <Wrapper variants={defaultFadeInUpVariants}>
            <VideoWrapper onHoverStart={onHoverStart} onHoverEnd={onHoverEnd}>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=xhztxmBJ9L4"
                    volume={0}
                    width="100%"
                    height="100%"
                    style={VideoStyle}
                    loop={true}
                    light={!isHover}
                    playing={isHover}
                    config={{
                        youtube: {
                            playerVars: { disablekb: 1 },
                        },
                    }}
                />
                <AnimatePresence exitBeforeEnter={true}>
                    {isHover && (
                        <>
                            <Overlay
                                variants={cardOverlayVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                            />
                            <CardInfo />
                        </>
                    )}
                </AnimatePresence>
            </VideoWrapper>
            <Title>Butter - 방탄소년단</Title>
            <Author>bts_official_bighit</Author>
        </Wrapper>
    );
};

export default VideoCard;

const Wrapper = styled(motion.article)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const VideoWrapper = styled(motion.section)`
    position: relative;
    aspect-ratio: 9 / 16;
    /* width: 270px; */
    width: 360px;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 12px;

    /* transition: box-shadow 1s;
    &:hover {
        box-shadow: 0px 0px 35px 5px rgba(101, 0, 230, 0.6);
    } */
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

const Title = styled.h2`
    font-size: 16px;
    font-weight: normal;
    color: ${({ theme }) => theme.color.black};
    margin-bottom: 4px;
`;

const Author = styled.h3`
    font-size: 12px;
    font-weight: normal;
    color: ${({ theme }) => theme.color.black};
`;
