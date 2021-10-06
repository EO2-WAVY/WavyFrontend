import { useRecoilState } from "recoil";
import { videoCardVolumeState } from "store/Main";

const useVideoCardVolume = () => {
    const [videoCardVolume, setVideoCardVolume] =
        useRecoilState(videoCardVolumeState);

    return {videoCardVolume, setVideoCardVolume};
};

export default useVideoCardVolume;
