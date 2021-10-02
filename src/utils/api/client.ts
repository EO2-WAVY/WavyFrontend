import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";
import { LS_USER_TOKEN_KEY } from "constants/storageKey";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

const interceptorsRequestFulfilled = (config: AxiosRequestConfig) => {
    return {
        ...config,
        headers: {
            Authorization: `Bearer ${localStorage.getItem(LS_USER_TOKEN_KEY)}`,
        },
    };
};

export const updateInstanceInterceptorsRequest = () => {
    instance.interceptors.request.use(interceptorsRequestFulfilled);
};

const interceptorsResponseFulfilled = (res: AxiosResponse) => {
    if (res.status >= 200 && res.status < 300) {
        return res.data;
    }

    return Promise.reject(res.data);
};

const interceptorsResponseRejected = (error: AxiosError) => {
    if (error.response?.data?.message != null) {
        return { ...error.response.data, message: error.response?.data?.message };
    }

    return Promise.reject(new Error(error.response?.data?.message ?? error));
};

instance.interceptors.response.use(
    interceptorsResponseFulfilled,
    interceptorsResponseRejected
);

export const get = <T>(...args: Parameters<typeof instance.get>) =>
    instance.get<T, T>(...args);

export const post = <T>(...args: Parameters<typeof instance.post>) =>
    instance.post<T, T>(...args);

export const put = <T>(...args: Parameters<typeof instance.put>) =>
    instance.put<T, T>(...args);

export const del = <T>(...args: Parameters<typeof instance.delete>) =>
    instance.delete<T, T>(...args);
