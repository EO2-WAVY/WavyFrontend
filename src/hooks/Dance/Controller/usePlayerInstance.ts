import ReactPlayer from "react-player";
import { RecoilState, useRecoilState } from "recoil";

type PlayerState = RecoilState<ReactPlayer | null | undefined>;

const usePlayerInstance = (playerState: PlayerState) => {
    const [player, setPlayer] = useRecoilState(playerState);

    const seekTo = (time: number) => {
        player?.seekTo(time);
    };

    return { setPlayer, seekTo };
};

export default usePlayerInstance;
