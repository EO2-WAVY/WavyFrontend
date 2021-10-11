import { MouseEvent } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import useToggle from "hooks/Common/useToggle";
import usePlaybackRate from "hooks/Dance/Controller/usePlaybackRate";
import { modalCenterFadeInUpVariants } from "constants/motions";

const PlaybackRate = () => {
    const [isShowing, toggleIsShowing] = useToggle(false);

    const onClickWrapper = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target !== e.currentTarget) return;
        toggleIsShowing();
    };

    const { playbackRate, onClickPlaybackRate } = usePlaybackRate();

    return (
        <Span onClick={onClickWrapper} playbackRate={playbackRate}>
            재생속도
            <AnimatePresence exitBeforeEnter>
                {isShowing && (
                    <HoverWrapper
                        variants={modalCenterFadeInUpVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <HoverElem
                            data-rate="0.25"
                            onClick={onClickPlaybackRate}
                        >
                            0.25 배속
                        </HoverElem>
                        <HoverElem
                            data-rate="0.5"
                            onClick={onClickPlaybackRate}
                        >
                            0.5 배속
                        </HoverElem>
                        <HoverElem
                            data-rate="0.75"
                            onClick={onClickPlaybackRate}
                        >
                            0.75 배속
                        </HoverElem>
                        <HoverElem data-rate="1" onClick={onClickPlaybackRate}>
                            1.0 배속
                        </HoverElem>
                        <HoverElem
                            data-rate="1.25"
                            onClick={onClickPlaybackRate}
                        >
                            1.25 배속
                        </HoverElem>
                        <HoverElem
                            data-rate="1.5"
                            onClick={onClickPlaybackRate}
                        >
                            1.5 배속
                        </HoverElem>
                        <HoverElem data-rate="2" onClick={onClickPlaybackRate}>
                            2.0 배속
                        </HoverElem>
                    </HoverWrapper>
                )}
            </AnimatePresence>
        </Span>
    );
};

export default PlaybackRate;

const Span = styled.span<{ playbackRate: number }>`
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    color: ${({ theme }) => theme.color.black};
    font-size: 14px;
    cursor: pointer;

    & span[data-rate="${({ playbackRate }) => playbackRate}"] {
        color: ${({ theme }) => theme.color.purple};
    }
`;

const HoverWrapper = styled(motion.div)`
    position: absolute;
    bottom: -180%;
    left: 50%;

    width: 180%;
    padding: 8px 12px;
    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.lightGray};

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
`;

const HoverElem = styled.span`
    color: ${({ theme }) => theme.color.gray};
    transition: color 0.3s;
`;
