import styled from "styled-components";

interface IHeader {
    kind: string;
}

const Header = ({ kind }: IHeader) => {
    const paragraph: string =
        kind === "로그인"
            ? "WAVY에 로그인하시고 서비스를 이용하세요!"
            : "WAVY에 가입하고 춤신춤왕으로 거듭나세요!";

    return (
        <HeaderWrapper>
            <Title>{kind}</Title>
            <Span>{paragraph}</Span>
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
