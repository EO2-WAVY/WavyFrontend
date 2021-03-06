import { atom } from "recoil";

export interface INotification {
    index: number;
    title: string;
    description: string;
    autoHideDuration: number;
}

export const notificationsState = atom<INotification[]>({
    key: "notificationsState",
    default: [],
});

export const notificationIndexState = atom<number>({
    key: "notificationIndexState",
    default: 0,
});
