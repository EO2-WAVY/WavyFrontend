import styled from "styled-components";

import Nav from "components/Common/Nav";
import Footer from "components/Common/Footer";

const Main = () => {
    return (
        <>
            <Nav />
            this is main
            <Test></Test>
            <Footer />
        </>
    );
};

export default Main;

const Test = styled.div`
    height: 10vw;
`;
