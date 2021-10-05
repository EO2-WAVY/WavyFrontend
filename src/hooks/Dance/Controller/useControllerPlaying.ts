import { useRecoilState } from "recoil";
import { isPlayingState } from "store/Dance/Controller";

const useControllerPlaying = () => {
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const toggleIsPlaying = () => setIsPlaying((prev) => !prev);

    return { isPlaying, toggleIsPlaying };
};

export default useControllerPlaying;
