import styled from "styled-components";

import Nav from "components/Common/Nav";
import Footer from "components/Common/Footer";
import TagSection from "components/Main/TagSection";

const Main = () => {
    return (
        <>
            <Nav />
            <Layout>
                <TagSection />
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
