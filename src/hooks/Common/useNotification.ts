import { useCallback } from "react";
import { useRecoilState } from "recoil";
import {
    INotification,
    notificationIndexState,
    notificationsState,
} from "store/Common";

const useNotification = () => {
    const [notifications, setNotifications] =
        useRecoilState(notificationsState);
    const [notificationIndex, setNotificationIndex] = useRecoilState(
        notificationIndexState
    );

    const addNotification = useCallback(
        ({
            title,
            description,
            autoHideDuration = 3,
        }: addNotificationProps) => {
            const newNoti: INotification = {
                index: notificationIndex,
                title,
                description,
                autoHideDuration,
            };

            setNotificationIndex((prev) => prev + 1);
            setNotifications([...notifications, newNoti]);
        },
        [
            notificationIndex,
            notifications,
            setNotificationIndex,
            setNotifications,
        ]
    );

    const removeNotification = (id: number) => {
        setNotifications((prevNotifications) =>
            prevNotifications.filter((noti) => noti.index !== id)
        );
    };

    return { addNotification, removeNotification, notifications };
};

export default useNotification;

interface addNotificationProps
    extends Omit<INotification, "autoHideDuration" | "index"> {
    autoHideDuration?: number;
}
