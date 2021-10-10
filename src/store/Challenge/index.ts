import { atom } from "recoil";

export const isChallengeVideoPlayingState = atom<boolean>({
    key: "isChallengeVideoPlayingState",
    default: false,
});
