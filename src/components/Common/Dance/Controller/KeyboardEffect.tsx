import styled, { keyframes } from "styled-components";

import useKeyControll from "hooks/Dance/Controller/useKeyControll";
import Icon from "components/Common/Icon";

const KeyboardEffect = () => {
    const { isEffect, ms } = useKeyControll();

    return (
        <Wrapper>
            {isEffect === "controller_play_key" && (
                <IconWrapper key={isEffect}>
                    <Icon name={isEffect} />
                </IconWrapper>
            )}
            {isEffect === "controller_stop_key" && (
                <IconWrapper key={isEffect}>
                    <Icon name={isEffect} />
                </IconWrapper>
            )}
            {isEffect === "controller_back_key" && (
                <IconWrapper key={`${isEffect}${ms}`}>
                    <Icon name={isEffect} />
                </IconWrapper>
            )}
            {isEffect === "controller_forward_key" && (
                <IconWrapper key={`${isEffect}${ms}`}>
                    <Icon name={isEffect} />
                </IconWrapper>
            )}
        </Wrapper>
    );
};

export default KeyboardEffect;

const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Keyframes = keyframes`
    0% {
        opacity: 0;
        transform: scale(0.8);
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: scale(1.6);
    }
`;

const IconWrapper = styled.div`
    position: absolute;
    opacity: 0;
    animation: ${Keyframes} 0.5s linear;
`;
