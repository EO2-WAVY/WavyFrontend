import { default as ReactWebcam } from "react-webcam";
import styled, { CSSProperties } from "styled-components";
import { useRecoilValue } from "recoil";

import { layoutState } from "store/Dance";

const Webcam = () => {
    const layout = useRecoilValue(layoutState);

    return (
        <Wrapper layout={layout}>
            <ReactWebcam mirrored style={WebcamStyle} />
        </Wrapper>
    );
};

export default Webcam;

const Wrapper = styled.section<{ layout: "half" | "drag" }>`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const WebcamStyle: CSSProperties = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    objectFit: "cover",
};
