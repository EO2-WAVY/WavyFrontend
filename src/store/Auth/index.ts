import { Member } from "hooks/api/useGetCurrentMember";
import { atom } from "recoil";

export const currentUserTokenState = atom<string | null>({
    key: "currentUserToken",
    default: null,
});

export const currentUserState = atom<Member | null>({
    key: "currentUser",
    default: null,
});
