import { useRecoilState } from "recoil";
import { playedSecondState } from "store/Dance/Controller";

const useControllerPlayedSecond = () => {
    const [playedSecond, setPlayedSecond] = useRecoilState(playedSecondState);

    return { playedSecond, setPlayedSecond };
};

export default useControllerPlayedSecond;
