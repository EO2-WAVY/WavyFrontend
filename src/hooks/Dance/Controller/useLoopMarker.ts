import { useRecoilState } from "recoil";
import { IMarker, loopMarkersState } from "store/Dance/Controller";
import useMarker from "./useMarker";

const useLoopMarker = () => {
    const { setMarkers } = useMarker();
    const [loopMarkers, setLoopMarkers] = useRecoilState(loopMarkersState);

    const updateLoopMarkerXPos = (id: number, xPos: number) => {
        setLoopMarkers((prevMarkers) => {
            const tempMarkers = [...prevMarkers];
            const resultMarkers = tempMarkers.map((marker) => {
                const tempMarker = { ...marker };

                if (tempMarker.index === id) {
                    tempMarker.clientX = xPos;
                }
                return tempMarker;
            });

            return resultMarkers;
        });
        // console.log(loopMarkers);
    };

    const toggleLoopMarker = (id: number) => {
        let isAppend: boolean = false;
        let clickedMarker: IMarker;

        setMarkers((prevMarkers) => {
            const tempMarkers = [...prevMarkers];
            const reseultMarkers = tempMarkers.map((marker) => {
                const tempMarker = { ...marker };
                if (tempMarker.index === id) {
                    const { isLoopMarker } = tempMarker;
                    tempMarker.isLoopMarker = !isLoopMarker;

                    // loop marker 처리를 위해
                    isAppend = !isLoopMarker;
                    clickedMarker = tempMarker;
                }
                return tempMarker;
            });

            return reseultMarkers;
        });

        // 기존 반복 마커 삭제일 시
        if (!isAppend) {
            setLoopMarkers((prev) =>
                prev.filter(
                    (loopMarker) => loopMarker.index !== clickedMarker.index
                )
            );
            return;
        }

        // 반복 마커가 2개 이상일 시
        if (loopMarkers.length >= 2) {
            let deletedMarker: IMarker | undefined;
            // 가장 먼저 저장된 반복 마커를 해제, 이번에 누른 마커를 반복 마커에 추가
            setLoopMarkers((prev) => {
                const tempLoopMarkers = [...prev];
                deletedMarker = tempLoopMarkers.shift();
                return [...tempLoopMarkers, clickedMarker];
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
            setLoopMarkers((prev) => [...prev, clickedMarker]);
        }
    };

    const applyLoopAtOnProgress = (playedSeconds: number, rvDuration: number) => {
        if (loopMarkers.length < 2) return;
        console.log(rvDuration);
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
