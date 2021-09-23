import { atom } from "recoil";

export const layoutState = atom<"half" | "drag">({
    key: "layoutState",
    default: "half",
});
