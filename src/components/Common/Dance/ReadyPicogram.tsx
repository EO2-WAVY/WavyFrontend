import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

import Icon from "components/Common/Icon";

const ReadyPictogram = () => {
    return (
        <PictogramWrapper>
            <Icon name="dance_pictogram" className="pictogram" />
            <Icon name="dance_note1" className="note" />
            <Icon name="dance_note2" className="note" />
            <Icon name="dance_note3" className="note" />
        </PictogramWrapper>
    );
};

export default ReadyPictogram;

const NoteFloating = keyframes`
    0% {
        transform: translate(0, 0px);
    }
    65% {
        transform: translate(0, 15px);
    }
    100% {
        transform: translate(0, 0px);
    }
`;

const PictogramWrapper = styled(motion.div)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 70%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    & > .pictogram {
        width: 50%;
    }

    & > .note {
        position: absolute;
        height: 8%;
        animation: ${NoteFloating} ease-in-out infinite;

        &:nth-child(2) {
            left: 0;
            animation-duration: 3s;
        }

        &:nth-child(3) {
            right: 20%;
            top: 5%;
            animation-duration: 2.5s;
        }

        &:nth-child(4) {
            right: 5%;
            animation-duration: 2s;
        }
    }
`;
