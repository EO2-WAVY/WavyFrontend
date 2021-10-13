import { Prompt } from "react-router-dom";
import useNotification from "hooks/Common/useNotification";
import useIsChallengeVideoPlaying from "hooks/Challenge/useIsChallengeVideoPlaying";


const RouteLeaveNotification = () => {
    const { addNotification } = useNotification();
    const { isPlaying } = useIsChallengeVideoPlaying();

    const handleRouteLeave = () => {
        addNotification({
            title: "계속 하세요 !",
            description: "도전하기 시에는 나갈 수 없습니다",
        });

        return false;
    };

    return <Prompt key="prompt" when={isPlaying} message={handleRouteLeave} />;
};

export default RouteLeaveNotification;
