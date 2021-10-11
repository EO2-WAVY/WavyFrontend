import ReactPlayer from "react-player";
import { atom } from "recoil";

export const refVideoRefState = atom<ReactPlayer | null | undefined>({
    key: "refVideoRefState",
    default: null,
    dangerouslyAllowMutability: true,
});

export const userVideoRefState = atom<ReactPlayer | null | undefined>({
    key: "userVideoRefState",
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

export const playbackRateState = atom<number>({
    key: "playbackRateState",
    default: 1,
});

export const isMirroredState = atom<boolean>({
    key: "isMirroredState",
    default: true,
});
