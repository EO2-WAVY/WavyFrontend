import { atom } from "recoil";

export const practiceStartTimeState = atom<string>({
    key: "practiceStartTimeState",
    default: "0000-00-00 00:00:00",
});
