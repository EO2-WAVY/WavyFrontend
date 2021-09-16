import styled from "styled-components";
import { motion } from "framer-motion";

import { useRouterQuery } from "hooks/useRouterQuery";
import { defaultPageFadeInVariants } from "constants/motionUtils";

const Search = () => {
    const query = useRouterQuery("q");

    return (
        <Layout
            variants={defaultPageFadeInVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            나는{query}
            <Test />
        </Layout>
    );
};

export default Search;

const Layout = styled(motion.div)`
    width: 100vw;
    max-width: ${({ theme }) => theme.size.maxWidth};
    padding: 0 ${({ theme }) => theme.size.layoutHorizonPadding};
    margin: 0 auto;
`;

const Test = styled.div`
    width: 100px;
    height: 200vh;
`;
