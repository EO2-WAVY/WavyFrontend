import { useEffect } from "react";
import styled from "styled-components";
import * as Sentry from "@sentry/react";
import ReactGA from "react-ga";

interface FullScreenErrorProps {
    error: Error;
}

const FullScreenError = ({ error }: FullScreenErrorProps) => {
    useEffect(() => {
        Sentry.captureException(error);
        Sentry.captureMessage(error.message);
        ReactGA.exception({
            description: `${error} Error ocurred`,
            fatal: true,
        });
    }, [error]);

    const onClickReset = () => {
        window.location.reload();
    };

    return (
        <Wrapper>
            <h1>예상치 못한 에러가 발생했습니다</h1>
            <p>지속적으로 해결되지 않을 시, 운영자한테 연락 부탁드립니다.</p>
            <button onClick={onClickReset}>메인으로 이동</button>
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

    & > h1 {
        font-size: 2rem;
        color: ${({ theme }) => theme.color.purple};
    }

    & > p {
        margin-bottom: 50px;
    }

    & > button {
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
