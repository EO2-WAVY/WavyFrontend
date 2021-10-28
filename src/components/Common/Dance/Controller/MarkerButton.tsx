import styled from "styled-components";

import Icon from "components/Common/Icon";
import { MouseEvent } from "react";
import useMarker from "hooks/Dance/Controller/useMarker";

const MarkerButton = () => {
    const { addMarker } = useMarker();

    const onClick = (e: MouseEvent<HTMLElement>) => {
        const { clientX } = e;
        addMarker({ clientX });
    };

    return (
        <Wrapper onClick={onClick}>
            <Icon name="controller_marker" />
        </Wrapper>
    );
};

export default MarkerButton;

const Wrapper = styled.div`
    height: 100%;
`;
