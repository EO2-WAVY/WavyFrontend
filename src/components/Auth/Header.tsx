import styled from "styled-components";

interface IHeader {
    kind: string;
}

const Header = ({ kind }: IHeader) => {
    return (
        <HeaderWrapper>
            <Title>{kind}</Title>
            <Span></Span>
        </HeaderWrapper>
    );
};

export default Header;

const HeaderWrapper = styled.header`
    width: 100%;
    height: 300px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1``;

const Span = styled.span``;
