import useControllerPlayedSecond from "hooks/Dance/Controller/useControllerPlayedSecond";
import useControllerPlaying from "hooks/Dance/Controller/useControllerPlaying";
import usePlaybackRate from "hooks/Dance/Controller/usePlaybackRate";
import usePlayerInstance, {
    PlayerState,
} from "hooks/Dance/Controller/usePlayerInstance";
import ReactPlayer from "react-player";
import { refVideoRefState, userVideoRefState } from "store/Dance/Controller";

import styled from "styled-components";

interface ControllablePlayerProps {
    url: string;
    controllableVideoState?: PlayerState;
}

const ControllablePlayer = ({
    url,
    controllableVideoState = refVideoRefState,
}: ControllablePlayerProps) => {
    const { setPlayer } = usePlayerInstance(controllableVideoState);
    const { player } = usePlayerInstance(userVideoRefState);

    const { isPlaying, setIsPlaying } = useControllerPlaying();
    const { setPlayedSecond } = useControllerPlayedSecond();
    const { playbackRate } = usePlaybackRate();

    const onEnded = () => {
        setIsPlaying(false);
    };

    const onBuffer = () => {
        setIsPlaying(false);
    };
    const onBufferEnd = () => {
        setIsPlaying(true);
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
                playing={isPlaying}
                playbackRate={playbackRate}
                onProgress={({ playedSeconds }) => {
                    setPlayedSecond(playedSeconds);
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
    z-index: 9;
`;
