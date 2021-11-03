import { useRecoilState } from "recoil";
import { controllerProgressBarRefState } from "store/Dance/Controller";

const useControllerProgressbarRef = () => {
    const [controllerProgressbarRef, setControllerProgressbarRef] =
        useRecoilState(controllerProgressBarRefState);

    return { controllerProgressbarRef, setControllerProgressbarRef };
};

export default useControllerProgressbarRef;
