import useControllerPlayedSecond from "hooks/Dance/Controller/useControllerPlayedSecond";
import useControllerPlaying from "hooks/Dance/Controller/useControllerPlaying";
import usePlaybackRate from "hooks/Dance/Controller/usePlaybackRate";
import usePlayerInstance from "hooks/Dance/Controller/usePlayerInstance";
import ReactPlayer from "react-player";
import { refVideoRefState } from "store/Dance/Controller";

import styled from "styled-components";

interface ControllablePlayerProps {
    url: string;
}

const ControllablePlayer = ({ url }: ControllablePlayerProps) => {
    const { setPlayer } = usePlayerInstance(refVideoRefState);

    const { isPlaying, setIsPlaying } = useControllerPlaying();
    const { setPlayedSecond } = useControllerPlayedSecond();
    const { playbackRate } = usePlaybackRate();

    const onEnded = () => {
        setIsPlaying(false);
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
