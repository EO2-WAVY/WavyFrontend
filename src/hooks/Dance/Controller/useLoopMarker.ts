import { useRecoilState } from "recoil";
import {
    IMarker,
    loopMarkersState,
    refVideoRefState,
    userVideoRefState,
} from "store/Dance/Controller";
import useControllerProgressbarRef from "./useControllerProgressbarRef";
import useMarker from "./useMarker";
import usePlayerInstance from "./usePlayerInstance";

const useLoopMarker = () => {
    const { setMarkers } = useMarker();
    const [loopMarkers, setLoopMarkers] = useRecoilState(loopMarkersState);

    const updateLoopMarkerXPos = (id: number, xPos: number) => {
        setLoopMarkers((prevMarkers) => {
            return prevMarkers.map((marker) => {
                const tempMarker = { ...marker };
                if (tempMarker.index === id) {
                    tempMarker.clientX = xPos;
                }
                return tempMarker;
            });
        });
    };

    const toggleLoopMarker = (id: number, xPos: number) => {
        let isAppend: boolean = false;

        // 일반 마커 속성 변경
        setMarkers((prevMarkers) => {
            return prevMarkers.map((marker) => {
                const tempMarker = { ...marker };
                if (tempMarker.index === id) {
                    const { isLoopMarker } = tempMarker;
                    tempMarker.isLoopMarker = !isLoopMarker;

                    // loop marker 처리를 위해
                    isAppend = !isLoopMarker;
                }
                return tempMarker;
            });
        });

        // 기존 반복 마커 삭제일 시
        if (!isAppend) {
            setLoopMarkers((prev) =>
                prev.filter((loopMarker) => loopMarker.index !== id)
            );
            return;
        }

        const newMarker: IMarker = {
            index: id,
            clientX: xPos,
            isLoopMarker: true,
        };

        // 반복 마커가 2개 이상일 시
        if (loopMarkers.length >= 2) {
            let deletedMarker: IMarker | undefined;
            // 가장 먼저 저장된 반복 마커를 해제, 이번에 누른 마커를 반복 마커에 추가
            setLoopMarkers((prev) => {
                const tempLoopMarkers = [...prev];
                deletedMarker = tempLoopMarkers.shift();
                return [...tempLoopMarkers, newMarker];
            });

            // 해제된 반복 마커를 적용
            setMarkers((prevMarkers) => {
                const tempMarkers = [...prevMarkers];
                const resultMarkers = tempMarkers.map((marker) => {
                    const tempMarker = { ...marker };
                    if (tempMarker.index === deletedMarker?.index) {
                        tempMarker.isLoopMarker = false;
                    }
                    return tempMarker;
                });

                return resultMarkers;
            });
        } else {
            setLoopMarkers((prev) => [...prev, newMarker]);
        }
    };

    const { controllerProgressbarRef } = useControllerProgressbarRef();
    const { seekTo } = usePlayerInstance(refVideoRefState);
    const { seekTo: userSeekTo } = usePlayerInstance(userVideoRefState);

    const getTimeWithPos = (
        xPos: number,
        rvDuration: number,
        clientWidth: number
    ) => {
        return (xPos * rvDuration) / clientWidth;
    };

    const applyLoopAtOnProgress = (
        playedSeconds: number,
        rvDuration: number
    ) => {
        if (loopMarkers.length < 2) return;
        if (!controllerProgressbarRef) return;

        const tempLoopMarkers = [...loopMarkers];
        const [{ clientX: minXPos }, { clientX: maxXPos }] =
            tempLoopMarkers.sort((st, nd) => {
                if (st.clientX > nd.clientX) {
                    return 1;
                }
                if (st.clientX < nd.clientX) {
                    return -1;
                }
                return 0;
            });

        const minTime = getTimeWithPos(
            minXPos,
            rvDuration,
            controllerProgressbarRef.clientWidth
        );
        const maxTime = getTimeWithPos(
            maxXPos,
            rvDuration,
            controllerProgressbarRef.clientWidth
        );

        if (playedSeconds < minTime) {
            seekTo(minTime);
            userSeekTo(minTime);
        }
        if (maxTime < playedSeconds) {
            seekTo(minTime);
            userSeekTo(minTime);
        }
    };

    return {
        loopMarkers,
        setLoopMarkers,
        updateLoopMarkerXPos,
        toggleLoopMarker,
        applyLoopAtOnProgress,
    };
};

export default useLoopMarker;
