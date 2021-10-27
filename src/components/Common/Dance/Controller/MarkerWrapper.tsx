import useMarker from "hooks/Dance/Controller/useMarker";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import Marker from "./Marker";

interface MarkerWrapperProps {
    rvDuration: number;
}

const MarkerWrapper = ({ rvDuration }: MarkerWrapperProps) => {
    const markerWrapperRef = useRef<HTMLDivElement>(null);
    const { markers, removeMarker, clearMarkers } = useMarker();

    useEffect(() => {
        return () => {
            clearMarkers();
        };
    }, [clearMarkers]);

    return (
        <Wrapper ref={markerWrapperRef}>
            {markers.map((marker) => (
                <Marker
                    key={marker.index}
                    rvDuration={rvDuration}
                    wrapperRef={markerWrapperRef}
                    index={marker.index}
                    time={marker.time}
                    clientX={marker.clientX}
                    handleClose={() => removeMarker(marker.index)}
                />
            ))}
        </Wrapper>
    );
};

export default MarkerWrapper;

const Wrapper = styled.div`
    position: absolute;
    bottom: 100%;
    left: 0;

    width: 100%;
    height: 24px;
`;
