import { useRecoilState } from "recoil";
import { isMirroredState } from "store/Dance/Controller";

const useMirrored = () => {
    const [isMirrored, setIsMirrored] = useRecoilState(isMirroredState);
    const toggleIsMirrored = () => setIsMirrored(!isMirrored);

    return { isMirrored, setIsMirrored, toggleIsMirrored };
};

export default useMirrored;
