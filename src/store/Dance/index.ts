import { atom } from "recoil";

export type layoutType = "half" | "drag";

export const layoutState = atom<layoutType>({
    key: "layoutState",
    default: "half",
});

export const playerVolumeState = atom<number>({
    key: "playerVolumeState",
    default: 0.5,
});
