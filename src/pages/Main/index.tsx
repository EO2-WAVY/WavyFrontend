import styled from "styled-components";

import Nav from "components/Common/Nav";
import Footer from "components/Common/Footer";
import TagSection from "components/Main/TagSection";
import {
    useViewportScroll,
    motion,
    useTransform,
    AnimatePresence,
} from "framer-motion";

const Main = () => {
    const { scrollY } = useViewportScroll();
    const scaleAnim = useTransform(scrollY, [0, 100, 200], [1, 2, 1.2]);
    const yPosAnim = useTransform(scrollY, [0, 100, 200], [0, -100, 1000]);

    return (
        <>
            <Nav />
            <Layout>
                <TagSection />
                <AnimatePresence exitBeforeEnter>
                    <TestDiv
                        style={{
                            scale: scaleAnim,
                            y: yPosAnim,
                        }}
                    >
                        asdfasdf
                    </TestDiv>
                </AnimatePresence>
                <Test />
            </Layout>
            <Footer />
        </>
    );
};

export default Main;

const Layout = styled.div`
    width: 100vw;
    max-width: ${({ theme }) => theme.size.maxWidth};
    padding: 0 ${({ theme }) => theme.size.layoutHorizonPadding};
    margin: 0 auto;
`;

const Test = styled.div`
    height: 200vh;
`;

const TestDiv = styled(motion.div)`
    width: 100px;
    height: 100px;
    background-color: red;
`;
