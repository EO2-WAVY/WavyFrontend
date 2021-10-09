import { useRecoilState } from "recoil";
import { INotification, notificationsState } from "store/Common";

let notificationIndex = 0;

const useNotification = () => {
    const [notifications, setNotifications] =
        useRecoilState(notificationsState);

    const addNotification = ({
        title,
        description,
        autoHideDuration = 3,
    }: addNotificationProps) => {
        const newNoti: INotification = {
            index: notificationIndex++,
            title,
            description,
            autoHideDuration,
        };
        setNotifications([...notifications, newNoti]);
    };

    const removeNotification = (id: number) => {
        setNotifications((prevNotifications) => {
            const tempNotifications = [...prevNotifications];
            tempNotifications.splice(
                tempNotifications.findIndex((noti) => noti.index === id),
                1
            );
            return tempNotifications;
        });
    };

    return { addNotification, removeNotification, notifications };
};

export default useNotification;

interface addNotificationProps
    extends Omit<INotification, "autoHideDuration" | "index"> {
    autoHideDuration?: number;
}
