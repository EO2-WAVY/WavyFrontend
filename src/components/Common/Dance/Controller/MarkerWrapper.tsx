import { useEffect } from "react";
import styled from "styled-components";

import useMarker from "hooks/Dance/Controller/useMarker";
import Marker from "./Marker";

interface MarkerWrapperProps {
    rvDuration: number;
}

const MarkerWrapper = ({ rvDuration }: MarkerWrapperProps) => {
    const { markers, removeMarker, clearMarkers } = useMarker();

    useEffect(() => {
        return () => {
            clearMarkers();
        };
    }, [clearMarkers]);

    return (
        <Wrapper>
            {markers.map((marker) => (
                <Marker
                    key={marker.index}
                    rvDuration={rvDuration}
                    index={marker.index}
                    isLoopMarker={marker.isLoopMarker}
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
