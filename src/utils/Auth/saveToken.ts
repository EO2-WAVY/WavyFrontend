import { LS_USER_TOKEN_KEY } from "constants/storageKey";

const saveToken = (code: string) => {
    localStorage.setItem(LS_USER_TOKEN_KEY, code);
};

export default saveToken;
