import { MouseEvent } from "react";
import { useRecoilState } from "recoil";
import { playbackRateState } from "store/Dance/Controller";

const usePlaybackRate = () => {
    const [playbackRate, setPlaybackRate] = useRecoilState(playbackRateState);

    const onClickPlaybackRate = (e: MouseEvent<HTMLSpanElement>) => {
        const rate = (e.target as HTMLSpanElement).dataset.rate;
        if (!rate) return;

        setPlaybackRate(Number(rate));
    };

    return { playbackRate, setPlaybackRate, onClickPlaybackRate };
};

export default usePlaybackRate;
