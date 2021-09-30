import styled from "styled-components";

const ControllerPorgressbar = () => {
    return (
        <Outer>
            <Inner />
        </Outer>
    );
};

export default ControllerPorgressbar;

const Outer = styled.div`
    width: 100%;
    height: 6px;
    background-color: ${({ theme }) => theme.color.lightGray};
`;

const Inner = styled.div`
    width: 50%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.purple};
`;
