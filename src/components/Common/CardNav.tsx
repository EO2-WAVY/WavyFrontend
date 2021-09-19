import { motion } from "framer-motion";
import styled from "styled-components";

import { cardNavUpVariants } from "constants/motionUtils";

const CardNav = () => {
    return (
        <Wrapper
            variants={cardNavUpVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        ></Wrapper>
    );
};

export default CardNav;

const Wrapper = styled(motion.div)`
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 80px;
    background-color: ${({ theme }) => theme.color.purple};

    z-index: 2;
`;
