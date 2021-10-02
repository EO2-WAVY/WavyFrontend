import { LS_USER_TOKEN_KEY } from "constants/storageKey";

const removeToken = () => {
    localStorage.removeItem(LS_USER_TOKEN_KEY);
};

export default removeToken;
