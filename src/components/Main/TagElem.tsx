import styled from "styled-components";

interface ITagElem {
    title: string;
}

const TagElem = ({ title }: ITagElem) => {
    return (
        <Wrapper>
            <Item />
            <Title>{title}</Title>
        </Wrapper>
    );
};

export default TagElem;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    cursor: pointer;
`;

const Item = styled.div`
    flex-shrink: 0;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #c4c4c4;
`;

const Title = styled.span`
    font-size: 1.5rem;
`;
