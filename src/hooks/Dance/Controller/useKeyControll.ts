import { useEffect } from "react";
import { refVideoRefState } from "store/Dance/Controller";
import useControllerPlayedSecond from "./useControllerPlayedSecond";
import useControllerPlaying from "./useControllerPlaying";
import usePlayerInstance from "./usePlayerInstance";

const useKeyControll = () => {
    const { toggleIsPlaying } = useControllerPlaying();
    const { playedSecond } = useControllerPlayedSecond();
    const { seekTo } = usePlayerInstance(refVideoRefState);

    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            switch (e.code) {
                case "Space":
                    toggleIsPlaying();
                    break;
                case "ArrowLeft":
                    seekTo(playedSecond - 5);
                    break;
                case "ArrowRight":
                    seekTo(playedSecond + 5);
                    break;

                default:
                    break;
            }
        };

        window.addEventListener("keydown", handleKeydown);

        return () => {
            window.removeEventListener("keydown", handleKeydown);
        };
    }, [playedSecond, seekTo, toggleIsPlaying]);
    return {};
};

export default useKeyControll;
