import styled from "styled-components";

const NavSearch = () => {
    return (
        <Wrapper>
            <Input />
            <ImgWrapper>
                <MagnifyImg src="" alt="" />
                <CancelImg src="" alt="" />
            </ImgWrapper>
            <BackLine />
            <OverLine />
        </Wrapper>
    );
};

export default NavSearch;

const Wrapper = styled.div`
    position: relative;
    width: 200px;
    height: 60%;

    display: flex;
    justify-content: space-between;
`;

const Input = styled.input`
    width: 80%;
    height: 100%;
`;

const ImgWrapper = styled.div`
    position: relative;
    width: 20%;
    height: 100%;
`;

const InputImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const MagnifyImg = styled(InputImg)`
    background-color: red;
`;

const CancelImg = styled(InputImg)`
    background-color: blue;
`;

const BackLine = styled.span`
    position: absolute;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 2px;
    background-color: black;
`;

const OverLine = styled.span`
    position: absolute;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 2px;
    background-color: blue;

    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s;

    ${Input}:focus ~ & {
        transform: scaleX(1);
    }
`;
