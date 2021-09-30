import Controller from "components/Common/Dance/Controller";
import styled from "styled-components";

const Practice = () => {
    return (
        <Wrapper>
            <Controller />
        </Wrapper>
    );
};

export default Practice;

const Wrapper = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
`;
