import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export const get = <T>(...args: Parameters<typeof instance.get>) =>
    instance.get<T, T>(...args);

export const post = <T>(...args: Parameters<typeof instance.post>) =>
    instance.post<T, T>(...args);

export const put = <T>(...args: Parameters<typeof instance.put>) =>
    instance.put<T, T>(...args);

export const del = <T>(...args: Parameters<typeof instance.delete>) =>
    instance.delete<T, T>(...args);
