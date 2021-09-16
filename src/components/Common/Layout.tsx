import { ReactNode } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { defaultPageFadeInVariants } from "constants/motionUtils";

interface ILayout {
    children: ReactNode;
}

const Layout = ({ children }: ILayout) => {
    return (
        <Wrapper
            variants={defaultPageFadeInVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {children}
        </Wrapper>
    );
};

export default Layout;

const Wrapper = styled(motion.div)`
    width: 100vw;
    max-width: ${({ theme }) => theme.size.maxWidth};
    padding: 0 ${({ theme }) => theme.size.layoutHorizonPadding};
    margin: 0 auto;
`;
