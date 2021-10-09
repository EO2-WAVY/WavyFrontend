import styled, { keyframes } from "styled-components";
import Icon from "components/Common/Icon";

const ModalImageWrapper = () => {
    return (
        <ImageWrapper>
            <Icon name="challenge_star1" className="star" />
            <Icon name="challenge_star2" className="star" />
            <Icon name="challenge_star3" className="star" />
            <Icon name="challenge_left_hand" className="lefthand" />
            <Icon name="challenge_right_hand" className="righthand" />
        </ImageWrapper>
    );
};

export default ModalImageWrapper;

const StarFloating = keyframes`
    0% {
        transform: translate(0, 0px);
    }
    65% {
        transform: translate(0, 8px);
    }
    100% {
        transform: translate(0, 0px);
    }
`;

const LeftHandKeyframe = keyframes`
    0% {
        transform: rotate(-30deg)
    }
    100% {
        transform: rotate(0);
    }
`;

const RightHandKeyframe = keyframes`
    0% {
        transform: rotate(30deg);
    }
    100% {
        transform: rotate(0);
    }
`;

const ImageWrapper = styled.div`
    position: relative;
    width: 350px;
    height: 260px;
    

    & > svg {
        position: absolute;
    }

    & > .righthand {
        width: 50%;
        right: 0;
        transform-origin: bottom right;
        animation: ${RightHandKeyframe} 0.8s ease-in-out 1;
    }

    & > .lefthand {
        width: 60%;
        left: 0;
        transform-origin: bottom left;
        animation: ${LeftHandKeyframe} 0.8s ease-in-out 1;
    }

    & > .star {
        width: 5%;
        animation: ${StarFloating} ease-in-out infinite;

        &:nth-child(1) {
            bottom: 30%;
            left: 50%;
            animation-duration: 3s;
        }
        &:nth-child(2) {
            top: 5%;
            right: 20%;
            animation-duration: 3.5s;
        }
        &:nth-child(3) {
            top: 20%;
            right: 10%;
            animation-duration: 4s;
        }
    }
`;
