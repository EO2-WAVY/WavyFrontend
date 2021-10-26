import styled from "styled-components";
import { motion } from "framer-motion";
import Spinner from "./Spinner";
import { defaultPageFadeInVariants } from "constants/motions";

interface MotionLoadingProps {
    height?: string;
}

const MotionLoading = ({ height = "100vh" }: MotionLoadingProps) => {
    return (
        <Wrapper
            variants={defaultPageFadeInVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            height={height}
        >
            <SpinnerWrapper>
                <Spinner />
            </SpinnerWrapper>
        </Wrapper>
    );
};

export default MotionLoading;

const Wrapper = styled(motion.div)<{ height: string }>`
    width: 100%;
    height: ${({ height }) => height};

    display: flex;
    justify-content: center;
    align-items: center;
`;

const SpinnerWrapper = styled(motion.div)`
    width: 10vw;
    aspect-ratio: 1 / 1;
`;
