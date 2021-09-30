import styled from "styled-components";

const Controller = () => {
    return (
        <Wrapper>
            <Progressbar />
            <ControlWrapper>
                <ControlLeft></ControlLeft>

                <ControlRight></ControlRight>
            </ControlWrapper>
        </Wrapper>
    );
};

export default Controller;

const Wrapper = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 48px;
    background-color: beige;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Progressbar = styled.div`
    width: 100%;
    height: 6px;
    background-color: ${({ theme }) => theme.color.lightGray};
`;

const ControlWrapper = styled.div`
    width: 100%;
    padding: 4px 6px;

    display: flex;
    justify-content: space-between;
`;

const ControlLeft = styled.div`
    width: 100px;
    height: 20px;
    background-color: red;
`;

const ControlRight = styled.div`
    width: 100px;
    height: 20px;
    background-color: blue;
`;
