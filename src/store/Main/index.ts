import { atom } from "recoil";

export const currentTagState = atom<string>({
    key: "currentTagState",
    default: "",
});
