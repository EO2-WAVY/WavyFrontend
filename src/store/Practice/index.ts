import { atom } from "recoil";

export const practiceStartTimeState = atom<string>({
    key: "practiceStartTimeState",
    default: "00:00:00",
});
