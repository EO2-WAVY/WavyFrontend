import { useState } from "react";
import ReactPlayer from "react-player";
import { AnimatePresence, motion } from "framer-motion";
import styled, { CSSProperties } from "styled-components";

import CardInfo from "components/Common/CardInfo";
import {
    cardOverlayVariants,
    defaultFadeInUpVariants,
} from "constants/motions";

import { fmToSeconds } from "utils/formatting/formattingDuration";
import useVideoCardVolume from "hooks/Main/useVideoCardVolume";
import { IAnalysis } from "hooks/api/useGetAnalyses";
import useGetAnalysisUserVideo from "hooks/api/useGetAnalysisUserVideo";

interface AnalysisVideoCardProps {
    analysis: IAnalysis;
}

const AnalysisVideoCard = ({
    analysis: {
        createdDate,
        anSeq,
        anScore,
        anGradeCode,
        refVideo: {
            rvUrl,
            rvSeq,
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

    return (
        <Wrapper variants={defaultFadeInUpVariants}>
            <VideoWrapper onMouseOver={onHoverStart} onMouseLeave={onHoverEnd}>
                <ReactPlayer
                    url={data?.signedUrl}
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
                            <CardInfo
                                rvSeq={rvSeq}
                                rvDuration={fmToSeconds(
                                    rvDuration ? rvDuration : "0"
                                )}
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
            <Author isHover={isHover}>{createdDate}</Author>
        </Wrapper>
    );
};

export default AnalysisVideoCard;

const Wrapper = styled(motion.article)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const VideoWrapper = styled(motion.div)`
    position: relative;
    aspect-ratio: 9 / 16;
    width: 250px;

    /* aspect-ratio: 12 / 9;
    width: 250px; */
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
