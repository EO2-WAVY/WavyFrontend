import styled, { keyframes } from "styled-components";

interface SpinnerProps {
    widthPercent?: number;
    margin?: string;
}

const Spinner = ({ widthPercent = 100, margin = "0 0 0 0" }: SpinnerProps) => {
    return (
        <Wrapper margin={margin}>
            <SpinElem widthPercent={widthPercent} />
        </Wrapper>
    );
};

export default Spinner;

interface IWrapper {
    margin: string;
}

const Wrapper = styled.div<IWrapper>`
    width: 100%;
    height: 100%;
    margin: ${({ margin }) => margin};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SpinKeyframe = keyframes`
    0% { 
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

interface ISpinElem {
    widthPercent: number;
}

const SpinElem = styled.div<ISpinElem>`
    position: relative;
    width: ${({ widthPercent }) => widthPercent}%;
    aspect-ratio: 1 / 1;

    &::before,
    &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border: 14px solid rgba(0, 0, 0, 0);
        border-radius: 50%;
        border-top: 14px solid ${({theme}) => theme.color.purple};
    }

    &::before {
        animation: ${SpinKeyframe} 2s infinite ease;
    }

    &::after {
        animation: ${SpinKeyframe} 2s infinite ease 0.2s;
    }
`;
