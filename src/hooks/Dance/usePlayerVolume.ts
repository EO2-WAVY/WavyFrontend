import { useRecoilState } from "recoil";
import { playerVolumeState } from "store/Dance";

const usePlayerVolume = () => {
    const [playerVolume, setPlayerVolume] = useRecoilState(playerVolumeState);

    const togglePlayerVolume = () => {
        setPlayerVolume((prev) => (prev > 0 ? 0 : 0.5));
    };

    const onPlayerVolumeChange = (value: number) => {
        setPlayerVolume(value);
    };

    return { playerVolume, setPlayerVolume, onPlayerVolumeChange, togglePlayerVolume };
};

export default usePlayerVolume;
