import { atom } from "recoil";

export const currentTagState = atom<string>({
    key: "currentTagState",
    default: "",
});

export const videoCardVolumeState = atom<number>({
    key: "videoCardVolumeState",
    default: 0.5,
});
