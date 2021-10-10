import { useRecoilState } from "recoil";
import { isChallengeVideoPlayingState } from "store/Challenge";

const useIsChallengeVideoPlaying = () => {
    const [isPlaying, setIsPlaying] = useRecoilState(
        isChallengeVideoPlayingState
    );
    
    return { isPlaying, setIsPlaying };
};

export default useIsChallengeVideoPlaying;
