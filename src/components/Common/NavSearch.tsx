import React, { ChangeEvent, useRef, useState } from "react";
import styled from "styled-components";

const NavSearch = () => {
    const [query, setQuery] = useState<string>("");

    const onChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value },
        } = e;

        setQuery(value);
    };

    const onClickCancel = () => {
        setQuery("");
    };

    return (
        <Wrapper>
            <Input onChange={onChangeQuery} value={query} />
            <ImgWrapper>
                <CancelImg src="" alt="" query={query} />
                <MagnifyImg
                    src=""
                    alt=""
                    query={query}
                    onClick={onClickCancel}
                />
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

interface IInputImg {
    query: string;
}

const InputImg = styled.img<IInputImg>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const MagnifyImg = styled(InputImg)`
    background-color: red;

    transition: transform 0.3s, opacity 0.3s;
    opacity: ${({ query }) => query.length > 0 && "0"};
    transform: ${({ query }) => query.length > 0 && "translateY(-6px)"};
`;

const CancelImg = styled(InputImg)`
    background-color: blue;

    transition: transform 0.3s, opacity 0.3s;
    opacity: ${({ query }) => query.length === 0 && "0"};
    transform: ${({ query }) => query.length === 0 && "translateY(-6px)"};
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
