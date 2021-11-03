import Icon from "components/Common/Icon";
import { LS_ACTIVATE_LOOP_BTN_KEY } from "constants/storageKey";
import useIsFirstLS from "hooks/Common/useIsFirstLS";
import useNotification from "hooks/Common/useNotification";
import useIsLoop from "hooks/Dance/Controller/useIsLoop";
import useMarker from "hooks/Dance/Controller/useMarker";
import { useEffect } from "react";

const LoopButton = () => {
    const { isLoop, toggleIsLoop, resetIsLoop } = useIsLoop();
    const { markers } = useMarker();
    const { addNotification } = useNotification();
    const firstAction = useIsFirstLS(LS_ACTIVATE_LOOP_BTN_KEY);

    const onClick = () => {
        if (markers.length < 2) {
            addNotification({
                title: "마커를 생성해주세요",
                description: "반복은 2개 이상의 마커가 존재해야 합니다",
            });
            return;
        }

        firstAction({
            handleFirst: () => {
                addNotification({
                    title: "Loop 사용 방법",
                    description:
                        "Loop 버튼이 활성화된 상태로 마커를 클릭해 반복을 위한 마커로 만들어주세요 !",
                    autoHideDuration: 5,
                });
                return;
            },
        });

        toggleIsLoop();
    };

    useEffect(() => {
        return () => {
            resetIsLoop();
        };
    }, [resetIsLoop]);

    return (
        <Icon
            name="controller_loop"
            onClick={onClick}
            className={isLoop ? "checked" : ""}
        />
    );
};

export default LoopButton;
