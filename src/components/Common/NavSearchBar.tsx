import { ChangeEvent, useState } from "react";
import styled from "styled-components";

const NavSearchBar = () => {
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
                <CancelImg
                    src="/images/Nav/cancel.svg"
                    alt="cancel"
                    query={query}
                />
                <MagnifyImg
                    src="/images/Nav/magnify.svg"
                    alt="submit"
                    query={query}
                    onClick={onClickCancel}
                />
            </ImgWrapper>
            <BackLine />
            <OverLine />
        </Wrapper>
    );
};

export default NavSearchBar;

const Wrapper = styled.div`
    position: relative;
    width: 278px;
    height: 40%;

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
    top: 50%;
    right: 0;
    width: 20px;
    height: 20px;
    transform: translateY(-50%);
`;

const MagnifyImg = styled(InputImg)`
    transition: transform 0.3s, opacity 0.3s;
    opacity: ${({ query }) => query.length > 0 && "0"};
    transform: ${({ query }) => query.length > 0 && "translateY(-6px)"};
`;

const CancelImg = styled(InputImg)`
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
    background-color: ${({ theme }) => theme.color.lightGray};
`;

const OverLine = styled.span`
    position: absolute;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.color.purple};

    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s;

    ${Input}:focus ~ & {
        transform: scaleX(1);
    }
`;
