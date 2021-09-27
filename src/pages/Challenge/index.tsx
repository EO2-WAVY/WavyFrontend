import Webcam from "components/Common/Dance/Webcam";
import useCapture from "hooks/Dance/useCapture";
import styled from "styled-components";

const Challenge = () => {
    const { setWebcamRef, startCapture, check } = useCapture();

    return (
        <Wrapper>
            <TestWebcamWrapper>
                <Webcam webcamRef={setWebcamRef} />
            </TestWebcamWrapper>

            <button onClick={startCapture}>start</button>
            <button onClick={check}>check</button>
        </Wrapper>
    );
};

export default Challenge;

const Wrapper = styled.main`
    width: 100vw;
    height: 100vh;

    display: flex;
    & > button {
        background: green;
        margin: 10px;
    }
`;

const TestWebcamWrapper = styled.div`
    width: 50%;
    height: 100%;
`;
