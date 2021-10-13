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
            <h1>예상치 못한 에러가 발생했습니다</h1>
            <a href="www.wavy.dance" target="_blank">
                메인으로 이동
            </a>
        </Wrapper>
    );
};

export default FullScreenError;

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;

    & > h1 {
        font-size: 2rem;
        color: ${({ theme }) => theme.color.purple};
    }

    & > a {
        padding: 16px 30px;
        background-color: ${({ theme }) => theme.color.purple};
        color: ${({ theme }) => theme.color.white};
        border-radius: 24px;
        font-weight: bold;
        transition: transform 0.3s;

        &:hover {
            transform: scale(1.05);
        }

        &:active {
            transform: scale(1);
        }
    }
`;
