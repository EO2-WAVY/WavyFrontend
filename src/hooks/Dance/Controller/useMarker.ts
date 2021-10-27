import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { IMarker, markerIndexState, markersState } from "store/Common";

const useMarker = () => {
    const [markers, setMarkers] = useRecoilState(markersState);
    const [markerIndex, setMarkerIndex] = useRecoilState(markerIndexState);

    const addMarker = useCallback(
        ({ clientX }: addMarkerProps) => {
            const newMarker: IMarker = {
                index: markerIndex,
                time: 123,
                clientX: clientX,
            };

            setMarkerIndex((prev) => prev + 1);
            setMarkers([...markers, newMarker]);
        },
        [markerIndex, markers, setMarkerIndex, setMarkers]
    );

    const removeMarker = (id: number) => {
        setMarkers((prevMarkers) =>
            prevMarkers.filter((marker) => marker.index !== id)
        );
    };

    const clearMarkers = useCallback(() => {
        setMarkers([]);
    }, [setMarkers]);

    return { markers, addMarker, removeMarker, clearMarkers };
};

export default useMarker;

interface addMarkerProps {
    clientX: number;
}
