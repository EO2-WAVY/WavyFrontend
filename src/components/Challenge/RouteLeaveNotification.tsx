import { Prompt } from "react-router-dom";
import useNotification from "hooks/Common/useNotification";
import useIsChallengeVideoPlaying from "hooks/Challenge/useIsChallengeVideoPlaying";
import useIsUploading from "hooks/Challenge/useIsUploading";

const RouteLeaveNotification = () => {
    const { addNotification } = useNotification();
    const { isPlaying } = useIsChallengeVideoPlaying();
    const { isUploading } = useIsUploading();

    const handleRouteLeave = () => {
        if (isPlaying) {
            addNotification({
                title: "계속 하세요 !",
                description: "도전하기 시에는 나갈 수 없습니다",
            });
        }
        if (isUploading) {
            addNotification({
                title: "동영상 업로드 중입니다",
                description: "잠깐만 기달려주세요 !",
            });
        }

        return false;
    };

    const handleWhen = () => {
        if (isPlaying) return true;
        if (isUploading) return true;
        return false;
    };

    return (
        <Prompt key="prompt" when={handleWhen()} message={handleRouteLeave} />
    );
};

export default RouteLeaveNotification;
