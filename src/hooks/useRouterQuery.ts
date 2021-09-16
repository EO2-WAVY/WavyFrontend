import { useLocation } from "react-router-dom";

export function useRouterQuery(key: string) {
    const query = new URLSearchParams(useLocation().search);
    const value = query.get(key);
    return value;
}
