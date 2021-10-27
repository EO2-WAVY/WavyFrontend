import useMarker from "hooks/Dance/Controller/useMarker";
import { useEffect } from "react";
import styled from "styled-components";
import Marker from "./Marker";

const MarkerWrapper = () => {
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
