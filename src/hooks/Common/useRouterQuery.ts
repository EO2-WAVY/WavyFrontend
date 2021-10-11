import { useLocation } from "react-router-dom";

export const useRouterQuery = (key: string) => {
    const query = new URLSearchParams(useLocation().search);
    const value = query.get(key);
    return value;
};
