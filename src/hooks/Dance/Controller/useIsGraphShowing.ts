import { useRecoilState } from "recoil";
import { isGraphShowingState } from "store/Dance/Controller";

const useIsGraphShowing = () => {
    const [isGraphShowing, setIsGraphShowing] =
        useRecoilState(isGraphShowingState);

    const toggleIsGraphShowing = () => {
        setIsGraphShowing((prev) => !prev);
    };

    return { isGraphShowing, toggleIsGraphShowing };
};

export default useIsGraphShowing;
