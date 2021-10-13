import styled from "styled-components";
import ReactPlayer from "react-player";

import { refVideoRefState } from "store/Dance/Controller";
import useUserVideoPlaying from "hooks/Analysis/useUserVideoPlayingState";
import useControllerPlayedSecond from "hooks/Dance/Controller/useControllerPlayedSecond";
import useControllerPlaying from "hooks/Dance/Controller/useControllerPlaying";
import usePlaybackRate from "hooks/Dance/Controller/usePlaybackRate";
import usePlayerInstance, {
    PlayerState,
} from "hooks/Dance/Controller/usePlayerInstance";

interface ControllablePlayerProps {
    url: string;
    controllableVideoState?: PlayerState;
}

const ControllablePlayer = ({
    url,
    controllableVideoState = refVideoRefState,
}: ControllablePlayerProps) => {
    const { setPlayer } = usePlayerInstance(controllableVideoState);
    const { isPlaying, setIsPlaying } = useControllerPlaying();
    const { setPlayedSecond } = useControllerPlayedSecond();
    const { playbackRate } = usePlaybackRate();

    const onEnded = () => {
        setIsPlaying(false);
    };

    // for analysis
    const isUserVideo = controllableVideoState !== refVideoRefState;
    const { isUserVideoPlaying, setIsUserVideoPlaying } = useUserVideoPlaying();

    const onBuffer = () => {
        setIsUserVideoPlaying(false);
    };

    const onBufferEnd = () => {
        if (isPlaying) setIsUserVideoPlaying(true);
    };

    return (
        <>
            <Overlay />
            <ReactPlayer
                ref={setPlayer}
                url={url}
                volume={0}
                width="100%"
                height="100%"
                controls={false}
                progressInterval={50}
                playing={isUserVideo ? isUserVideoPlaying : isPlaying}
                playbackRate={playbackRate}
                onProgress={({ playedSeconds }) => {
                    if (!isUserVideo) setPlayedSecond(playedSeconds);
                }}
                onEnded={onEnded}
                onBuffer={onBuffer}
                onBufferEnd={onBufferEnd}
            />
        </>
    );
};

export default ControllablePlayer;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* z-index: 9; */
`;
