import styled from "styled-components";
import { motion } from "framer-motion";
import Spinner from "./Spinner";
import {
    defaultFadeInUpVariants,
    defaultPageFadeInVariants,
} from "constants/motions";

const MotionLoading = () => {
    return (
        <Wrapper
            variants={defaultPageFadeInVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <SpinnerWrapper variants={defaultFadeInUpVariants}>
                <Spinner />
            </SpinnerWrapper>
        </Wrapper>
    );
};

export default MotionLoading;

const Wrapper = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: white;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const SpinnerWrapper = styled(motion.div)`
    width: 10vw;
    aspect-ratio: 1 / 1;
`;
