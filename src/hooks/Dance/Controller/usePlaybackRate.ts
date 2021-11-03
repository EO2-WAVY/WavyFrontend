import { MouseEvent } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { playbackRateState } from "store/Dance/Controller";

const usePlaybackRate = () => {
    const [playbackRate, setPlaybackRate] = useRecoilState(playbackRateState);
    const resetPlaybackRate = useResetRecoilState(playbackRateState);

    const onClickPlaybackRate = (e: MouseEvent<HTMLSpanElement>) => {
        const rate = (e.target as HTMLSpanElement).dataset.rate;
        if (!rate) return;

        setPlaybackRate(Number(rate));
    };

    return {
        playbackRate,
        setPlaybackRate,
        onClickPlaybackRate,
        resetPlaybackRate,
    };
};

export default usePlaybackRate;
