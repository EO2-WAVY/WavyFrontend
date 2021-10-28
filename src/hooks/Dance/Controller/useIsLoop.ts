import { useRecoilState } from "recoil";
import { isLoopState } from "store/Dance/Controller";

const useIsLoop = () => {
    const [isLoop, setIsLoop] = useRecoilState(isLoopState);

    const toggleIsLoop = () => {
        setIsLoop((prev) => !prev);
    };

    return { isLoop, setIsLoop, toggleIsLoop };
};

export default useIsLoop;
