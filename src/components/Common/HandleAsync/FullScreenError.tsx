import styled from "styled-components";
import * as Sentry from "@sentry/react";
import { useEffect } from "react";

interface FullScreenErrorProps {
    error: Error;
}

const FullScreenError = ({ error }: FullScreenErrorProps) => {
    useEffect(() => {
        Sentry.captureException(error);
        Sentry.captureMessage(error.message);
    }, [error]);

    return (
        <Wrapper>
            <h1>Unexcepted error</h1>
            <p>{error.message}</p>
        </Wrapper>
    );
};

export default FullScreenError;

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
