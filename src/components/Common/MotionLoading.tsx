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
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const SpinnerWrapper = styled(motion.div)`
    width: 10vw;
    aspect-ratio: 1 / 1;
`;
