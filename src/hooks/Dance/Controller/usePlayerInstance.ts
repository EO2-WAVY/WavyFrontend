import ReactPlayer from "react-player";
import { RecoilState, useRecoilState } from "recoil";

export type PlayerState = RecoilState<ReactPlayer | null | undefined>;

const usePlayerInstance = (playerState: PlayerState) => {
    const [player, setPlayer] = useRecoilState(playerState);

    const seekTo = (time: number) => {
        player?.seekTo(time, "seconds");
    };

    return { setPlayer, seekTo, player };
};

export default usePlayerInstance;
