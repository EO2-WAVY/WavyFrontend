import { useRecoilState } from "recoil";
import { playerVolumeState } from "store/Dance";

const usePlayerVolume = () => {
    const [playerVolume, setPlayerVolume] = useRecoilState(playerVolumeState);

    const onPlayerVolumeChange = (value: number) => {
        setPlayerVolume(value);
    };

    return { playerVolume, setPlayerVolume, onPlayerVolumeChange };
};

export default usePlayerVolume;
