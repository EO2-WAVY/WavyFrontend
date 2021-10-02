import { atom } from "recoil";

export const currentUserTokenState = atom<string | null>({
    key: "currentUserToken",
    default: null,
});
