import { useMemo, useState } from "react";
import ReactPlayer from "react-player";
import { AnimatePresence, motion } from "framer-motion";
import styled, { CSSProperties } from "styled-components";

import {
    cardOverlayVariants,
    defaultFadeInUpVariants,
} from "constants/motions";

import { fmToSeconds } from "utils/formatting/formattingDuration";
import useVideoCardVolume from "hooks/Main/useVideoCardVolume";
import { IAnalysis } from "hooks/api/useGetAnalysis";
import useGetAnalysisUserVideo from "hooks/api/useGetAnalysisUserVideo";
import AnalysisCardInfo from "./AnalysisCardInfo";
import { calcStringDateWithCurrentDate } from "utils/formatting/formattingDate";

interface AnalysisVideoCardProps {
    analysis: IAnalysis;
}

const AnalysisVideoCard = ({
    analysis: {
        createdDate,
        anSeq,
        refVideo: {
            rvDuration,
            rvDifficultyCd,
            rvSongName,
            rvArtistName,
            rvSourceAccountName,
        },
    },
}: AnalysisVideoCardProps) => {
    const { videoCardVolume } = useVideoCardVolume();
    const [isHover, setIsHover] = useState<boolean>(false);
    const { data } = useGetAnalysisUserVideo(anSeq);

    const onHoverStart = () => {
        setIsHover(true);
    };

    const onHoverEnd = () => {
        setIsHover(false);
    };

    const calcedTime = useMemo(
        () => calcStringDateWithCurrentDate(createdDate),
        [createdDate]
    );

    if (!data) return null;

    return (
        <Wrapper
            variants={defaultFadeInUpVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            key={anSeq}
        >
            <VideoWrapper onMouseOver={onHoverStart} onMouseLeave={onHoverEnd}>
                <ReactPlayer
                    url={data.signedUrl}
                    playing={isHover}
                    volume={videoCardVolume}
                    height="100%"
                    style={VideoStyle}
                    loop={true}
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
                            <AnalysisCardInfo
                                key={`${anSeq} card info`}
                                anSeq={anSeq}
                                rvDuration={fmToSeconds(
                                    rvDuration ? rvDuration : "0"
                                )}
                                rvDifficultyCd={rvDifficultyCd}
                                donwloadUrl={data.signedUrl}
                            />
                        </>
                    )}
                </AnimatePresence>
            </VideoWrapper>

            <Title isHover={isHover}>
                {rvSongName} - {rvArtistName}
            </Title>
            <Author isHover={isHover}>{rvSourceAccountName}</Author>
            <Author isHover={isHover}>{calcedTime}</Author>
        </Wrapper>
    );
};

export default AnalysisVideoCard;

const Wrapper = styled(motion.article)`
    width: calc(25% - 8px);
    flex-shrink: 0;
    display: flex;
    margin: 0 4px;
    flex-direction: column;
    align-items: center;

    &:last-child {
        margin-right: auto;
    }
`;

const VideoWrapper = styled(motion.div)`
    position: relative;
    aspect-ratio: 9 / 16;
    width: 100%;
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
    left: "50%",
    transform: "translate(-50%)",
    objectFit: "contain",
    aspectRatio: "9 / 16",
};

const Title = styled.h2<{ isHover: boolean }>`
    font-size: 16px;
    font-weight: 500;
    text-align: center;
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
