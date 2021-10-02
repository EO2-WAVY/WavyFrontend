import { Member } from "hooks/api/useCheckCurrentMember";
import { atom } from "recoil";

export const currentUserState = atom<Member | null>({
    key: "currentUser",
    default: null,
});
