import { useState, useEffect } from "react";
import { refVideoRefState, userVideoRefState } from "store/Dance/Controller";
import useControllerPlayedSecond from "./useControllerPlayedSecond";
import useControllerPlaying from "./useControllerPlaying";
import usePlayerInstance from "./usePlayerInstance";

type KeyType =
    | "controller_play_key"
    | "controller_stop_key"
    | "controller_forward_key"
    | "controller_back_key"
    | null;

const useKeyControll = () => {
    const { isPlaying, toggleIsPlaying } = useControllerPlaying();
    const { playedSecond } = useControllerPlayedSecond();
    const { seekTo } = usePlayerInstance(refVideoRefState);
    const { seekTo: userSeekTo } = usePlayerInstance(userVideoRefState);

    const [isEffect, setIsEffect] = useState<KeyType>(null);
    const [ms, setMs] = useState<number>(0);

    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            let key: typeof isEffect = null;
            const date = new Date();
            setMs(date.getMilliseconds());

            switch (e.code) {
                case "Space":
                    key = isPlaying
                        ? "controller_stop_key"
                        : "controller_play_key";
                    toggleIsPlaying();
                    break;

                case "ArrowLeft":
                    key = "controller_back_key";
                    seekTo(playedSecond - 5);
                    userSeekTo(playedSecond - 5);
                    break;

                case "ArrowRight":
                    key = "controller_forward_key";
                    seekTo(playedSecond + 5);
                    userSeekTo(playedSecond + 5);
                    break;

                default:
                    break;
            }

            setIsEffect(key);
        };

        window.addEventListener("keydown", handleKeydown);

        return () => {
            window.removeEventListener("keydown", handleKeydown);
        };
    }, [isEffect, isPlaying, playedSecond, seekTo, toggleIsPlaying]);

    return { isEffect, ms };
};

export default useKeyControll;
