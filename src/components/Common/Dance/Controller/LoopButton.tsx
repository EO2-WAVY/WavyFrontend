import Icon from "components/Common/Icon";
import useNotification from "hooks/Common/useNotification";
import useIsLoop from "hooks/Dance/Controller/useIsLoop";
import useMarker from "hooks/Dance/Controller/useMarker";

const LoopButton = () => {
    const { isLoop, toggleIsLoop } = useIsLoop();
    const { markers } = useMarker();
    const { addNotification } = useNotification();

    const onClick = () => {
        if (markers.length < 2) {
            addNotification({
                title: "마커를 생성해주세요",
                description: "반복은 2개 이상의 마커가 존재해야 합니다",
            });
            return;
        }

        toggleIsLoop();
    };

    return (
        <Icon
            name="controller_loop"
            onClick={onClick}
            className={isLoop ? "checked" : ""}
        />
    );
};

export default LoopButton;
