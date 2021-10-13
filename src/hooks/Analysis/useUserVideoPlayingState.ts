import { useRecoilState } from "recoil";
import { isUserVideoPlayingState } from "store/Dance/Controller";

const useUserVideoPlaying = () => {
    const [isUserVideoPlaying, setIsUserVideoPlaying] = useRecoilState(
        isUserVideoPlayingState
    );
    const toggleIsUserVideoPlaying = () => setIsUserVideoPlaying((prev) => !prev);

    return { isUserVideoPlaying, setIsUserVideoPlaying, toggleIsUserVideoPlaying };
};

export default useUserVideoPlaying;
