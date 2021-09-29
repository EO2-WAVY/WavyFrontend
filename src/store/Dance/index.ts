import { atom } from "recoil";

export type layoutType = "half" | "drag";

export const layoutState = atom<layoutType>({
    key: "layoutState",
    default: "half",
});
