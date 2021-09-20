import { get } from "utils/api/client";

export const fetcher = async <T>(path: string) => {
    const response = await get<T>(path);

    return response;
};
