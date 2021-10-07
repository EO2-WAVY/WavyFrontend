import styled from "styled-components";

interface DefaultRejectedScreenProps {
    error?: Error;
    resetError?: () => void;
}

const DefaultRejectedScreen = ({
    error,
    resetError,
}: DefaultRejectedScreenProps) => {
    return (
        <Wrapper>
            {error}
            <button onClick={resetError}>reset</button>
        </Wrapper>
    );
};

export default DefaultRejectedScreen;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;
