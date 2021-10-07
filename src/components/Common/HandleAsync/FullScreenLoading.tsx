import styled from "styled-components";
import Spinner from "../Spinner";

const FullScreenLoading = () => {
    return (
        <Wrapper>
            <SpinnerWrapper>
                <Spinner />
            </SpinnerWrapper>
        </Wrapper>
    );
};

export default FullScreenLoading;

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const SpinnerWrapper = styled.div`
    aspect-ratio: 1 / 1;
    width: 10vw;
`;
