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
import usePlayerVolume from "hooks/Dance/usePlayerVolume";
import useIsLoop from "hooks/Dance/Controller/useIsLoop";
import useLoopMarker from "hooks/Dance/Controller/useLoopMarker";

interface ControllablePlayerProps {
    url: string;
    rvDuration?: number;
    controllableVideoState?: PlayerState;
}

const ControllablePlayer = ({
    url,
    rvDuration,
    controllableVideoState = refVideoRefState,
}: ControllablePlayerProps) => {
    const { setPlayer } = usePlayerInstance(controllableVideoState);
    const { isPlaying, setIsPlaying } = useControllerPlaying();
    const { setPlayedSecond } = useControllerPlayedSecond();
    const { playbackRate } = usePlaybackRate();

    const { isLoop } = useIsLoop();
    const { applyLoopAtOnProgress } = useLoopMarker();

    const onEnded = () => {
        setIsPlaying(false);
    };

    const onProgress = ({ playedSeconds }: { [key: string]: number }) => {
        if (isUserVideo) return;
        setPlayedSecond(playedSeconds);
        if (isLoop && rvDuration)
            applyLoopAtOnProgress(playedSeconds, rvDuration);
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

    // for volume
    const { playerVolume } = usePlayerVolume();

    return (
        <>
            <Overlay />
            <ReactPlayer
                playsinline={true}
                ref={setPlayer}
                url={url}
                volume={playerVolume}
                width="100%"
                height="100%"
                controls={false}
                progressInterval={50}
                playing={isUserVideo ? isUserVideoPlaying : isPlaying}
                playbackRate={playbackRate}
                onProgress={onProgress}
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

    & + div > video {
        object-fit: cover;
    }
`;
