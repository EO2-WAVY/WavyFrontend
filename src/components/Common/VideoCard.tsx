import { useState } from "react";
import ReactPlayer from "react-player";
import { AnimatePresence, motion } from "framer-motion";
import styled, { CSSProperties } from "styled-components";

import CardInfo from "components/Common/CardInfo";
import {
    cardOverlayVariants,
    defaultFadeInUpVariants,
} from "constants/motions";

import { IRefVideo } from "hooks/api/Main/useGetRefVideos";
import { fmToSeconds } from "utils/formatting/formattingDuration";
import useVideoCardVolume from "hooks/Main/useVideoCardVolume";

interface VideoCardProps {
    refVideo: IRefVideo;
}

const VideoCard = ({
    refVideo: {
        rvSeq,
        rvSongName,
        rvArtistName,
        rvUrl,
        rvSourceAccountName,
        rvDuration,
        rvDifficultyCd,
    },
}: VideoCardProps) => {
    const { videoCardVolume } = useVideoCardVolume();
    const [isHover, setIsHover] = useState<boolean>(false);
    const [isActivate, setIsActivate] = useState<boolean>(false);

    const onHoverStart = () => {
        if (!isHover) setIsHover(true);
        setIsActivate(true);
    };

    const onHoverEnd = () => {
        setIsHover(false);
    };

    return (
        <Wrapper variants={defaultFadeInUpVariants}>
            {/*  onMouseMove={onHoverStart} onMouseLeave={onHoverEnd} onHoverStart={onHoverStart} onHoverEnd={onHoverEnd} */}
            <VideoWrapper onMouseOver={onHoverStart} onMouseLeave={onHoverEnd}>
                <ReactPlayer
                    url={rvUrl}
                    playing={isHover}
                    volume={videoCardVolume}
                    width="100%"
                    height="100%"
                    style={VideoStyle}
                    loop={true}
                    // light={!isHover}
                    light={!isActivate}
                    config={{
                        youtube: {
                            playerVars: { disablekb: 1 },
                        },
                    }}
                />
                <AnimatePresence exitBeforeEnter>
                    {isHover && (
                        <>
                            <Overlay
                                variants={cardOverlayVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                            />
                            <CardInfo
                                rvSeq={rvSeq}
                                rvDuration={fmToSeconds(rvDuration)}
                                rvDifficultyCd={rvDifficultyCd}
                            />
                        </>
                    )}
                </AnimatePresence>
            </VideoWrapper>
            <Title isHover={isHover}>
                {rvSongName} - {rvArtistName}
            </Title>
            <Author isHover={isHover}>{rvSourceAccountName}</Author>
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

const Title = styled.h2<{ isHover: boolean }>`
    font-size: 16px;
    font-weight: normal;
    color: ${({ theme }) => theme.color.black};
    margin-bottom: 4px;

    ${Wrapper}:hover & {
        color: ${({ theme }) => theme.color.purple};
    }

    transition: color 0.3s;
`;

const Author = styled.h3<{ isHover: boolean }>`
    font-size: 12px;
    font-weight: normal;
    color: ${({ theme }) => theme.color.black};

    ${Wrapper}:hover & {
        color: ${({ theme }) => theme.color.purple};
    }

    transition: color 0.3s;
`;
