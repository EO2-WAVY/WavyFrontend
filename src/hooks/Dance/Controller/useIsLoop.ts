import { useRecoilState, useResetRecoilState } from "recoil";
import { isLoopState } from "store/Dance/Controller";

const useIsLoop = () => {
    const [isLoop, setIsLoop] = useRecoilState(isLoopState);
    const resetIsLoop = useResetRecoilState(isLoopState);

    const toggleIsLoop = () => {
        setIsLoop((prev) => !prev);
    };

    return { isLoop, setIsLoop, toggleIsLoop, resetIsLoop };
};

export default useIsLoop;
