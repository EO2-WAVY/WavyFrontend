import { useCallback } from "react";
import { useRecoilState } from "recoil";
import {
    IMarker,
    loopMarkersState,
    markerIndexState,
    markersState,
} from "store/Dance/Controller";
import useIsLoop from "./useIsLoop";

const useMarker = () => {
    const [markers, setMarkers] = useRecoilState(markersState);
    const [markerIndex, setMarkerIndex] = useRecoilState(markerIndexState);
    const [loopMarkers, setLoopMarkers] = useRecoilState(loopMarkersState);

    const addMarker = useCallback(
        ({ clientX }: addMarkerProps) => {
            const newMarker: IMarker = {
                index: markerIndex,
                isLoopMarker: false,
                clientX: clientX,
            };

            setMarkerIndex((prev) => prev + 1);
            setMarkers([...markers, newMarker]);
        },
        [markerIndex, markers, setMarkerIndex, setMarkers]
    );

    const toggleLoopMarker = (id: number) => {
        let clickedMarker: IMarker;

        setMarkers((prevMarkers) => {
            const tempMarkers = [...prevMarkers];
            const reseultMarkers = tempMarkers.map((marker) => {
                const tempMarker = { ...marker };
                if (tempMarker.index === id) {
                    const { isLoopMarker } = tempMarker;
                    tempMarker.isLoopMarker = !isLoopMarker;

                    // loop marker 처리를 위해
                    clickedMarker = tempMarker;
                }
                return tempMarker;
            });

            return reseultMarkers;
        });

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

    const { setIsLoop } = useIsLoop();
    const removeMarker = (id: number) => {
        if (markers.length <= 2) {
            setIsLoop(false);
        }

        setMarkers((prevMarkers) =>
            prevMarkers.filter((marker) => marker.index !== id)
        );
    };

    const clearMarkers = useCallback(() => {
        setMarkers([]);
    }, [setMarkers]);

    return { markers, addMarker, removeMarker, clearMarkers, toggleLoopMarker };
};

export default useMarker;

interface addMarkerProps {
    clientX: number;
}
