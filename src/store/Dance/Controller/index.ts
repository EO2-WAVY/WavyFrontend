import ReactPlayer from "react-player";
import { atom } from "recoil";

export const refVideoRefState = atom<ReactPlayer | null | undefined>({
    key: "refVideoRefState",
    default: null,
    dangerouslyAllowMutability: true,
});

export const isPlayingState = atom<boolean>({
    key: "isPlayingState",
    default: false,
});

export const playedSecondState = atom<number>({
    key: "playedSecondState",
    default: 0,
});
