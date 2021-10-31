import { useCallback } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
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
    const setLoopMarkers = useSetRecoilState(loopMarkersState);

    const addMarker = useCallback(
        ({ clientX }: addMarkerProps) => {
            const newMarker: IMarker = {
                index: markerIndex,
                isLoopMarker: false,
                clientX: clientX,
            };

            setMarkerIndex((prev) => prev + 1);
            setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
        },
        [markerIndex, setMarkerIndex, setMarkers]
    );

    const { setIsLoop } = useIsLoop();
    const removeMarker = (id: number) => {
        if (markers.length <= 2) {
            setIsLoop(false);
        }

        setMarkers((prevMarkers) =>
            prevMarkers.filter((marker) => marker.index !== id)
        );

        setLoopMarkers((prevMarkers) =>
            prevMarkers.filter((loopMarker) => loopMarker.index !== id)
        );
    };

    const clearMarkers = useCallback(() => {
        setMarkers([]);
    }, [setMarkers]);

    return {
        markers,
        setMarkers,
        addMarker,
        removeMarker,
        clearMarkers,
    };
};

export default useMarker;

interface addMarkerProps {
    clientX: number;
}
