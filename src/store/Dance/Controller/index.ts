import { atom } from "recoil";

export const isPlayingState = atom<boolean>({
    key: "isPlayingState",
    default: false,
});


