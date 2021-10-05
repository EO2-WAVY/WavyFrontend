import { atom } from "recoil";

export const isPlayingState = atom<boolean>({
    key: "isPlayingState",
    default: false,
});

export const playedSecondState = atom<number>({
    key: "playedSecondState",
    default: 0,
});
