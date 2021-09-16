import styled from "styled-components";
import { motion } from "framer-motion";

import TagSection from "components/Main/TagSection";
import { defaultPageFadeInVariants } from "constants/motionUtils";

const Main = () => {
    return (
        <Layout
            variants={defaultPageFadeInVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <TagSection />

            <Test />
            <Test1 />
            <Test />
            <Test1 />
            <Test />
        </Layout>
    );
};

export default Main;

const Layout = styled(motion.div)`
    width: 100vw;
    max-width: ${({ theme }) => theme.size.maxWidth};
    padding: 0 ${({ theme }) => theme.size.layoutHorizonPadding};
    margin: 0 auto;
`;

const Test = styled.div`
    height: 50vh;
`;

const Test1 = styled.div`
    height: 40vh;
    width: 100px;
    background-color: red;
`;
