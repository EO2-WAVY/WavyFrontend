import { useCallback } from "react";
import { useRecoilState } from "recoil";
import {
    IMarker,
    markerIndexState,
    markersState,
} from "store/Dance/Controller";
import useIsLoop from "./useIsLoop";

const useMarker = () => {
    const [markers, setMarkers] = useRecoilState(markersState);
    const [markerIndex, setMarkerIndex] = useRecoilState(markerIndexState);

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
        setMarkers((prevMarkers) => {
            const tempMarkers = [...prevMarkers];
            const reseultMarkers = tempMarkers.map((marker) => {
                const tempMarker = { ...marker };
                if (tempMarker.index === id) {
                    tempMarker.isLoopMarker = !tempMarker.isLoopMarker;
                }
                return tempMarker;
            });
            console.log(reseultMarkers);
            return reseultMarkers;
        });
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
