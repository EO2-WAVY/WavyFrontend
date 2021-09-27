import styled from "styled-components";
import { motion } from "framer-motion";
import { defaultPageFadeInVariants } from "constants/motions";

interface ReadyProps {
    index?: number;
    setNextStep?: () => void;
}

const Ready = ({ index, setNextStep }: ReadyProps) => {
    return (
        <Wrapper
            key={index}
            variants={defaultPageFadeInVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            준비하세요!!! <button onClick={setNextStep}>다음</button>
        </Wrapper>
    );
};

export default Ready;

const Wrapper = styled(motion.aside)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
`;
