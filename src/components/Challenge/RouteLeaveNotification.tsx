import useNotification from "hooks/useNotification";
import { Prompt } from "react-router-dom";

interface RouteLeaveNotificationProps {
    isCapturing: boolean;
    isEnded: boolean;
}

const RouteLeaveNotification = ({
    isCapturing,
    isEnded,
}: RouteLeaveNotificationProps) => {
    const { addNotification } = useNotification();

    const handleRouteLeave = () => {
        addNotification({
            title: "계속 하세요 !",
            description: "도전하기 시에는 나갈 수 없습니다",
        });
        return false;
    };

    return (
        <>
            <Prompt when={isCapturing || !isEnded} message={handleRouteLeave} />
        </>
    );
};

export default RouteLeaveNotification;
