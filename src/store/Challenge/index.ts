import { atom } from "recoil";

export const isChallengeVideoPlayingState = atom<boolean>({
    key: "isChallengeVideoPlayingState",
    default: false,
});

export const isUploadingState = atom<boolean>({
    key: "isUploadingState",
    default: false,
});
