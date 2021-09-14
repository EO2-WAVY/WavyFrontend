import styled from "styled-components";

interface IHr {
    margin?: string;
}

const Hr = ({ margin = "0" }: IHr) => {
    return (
        <HrWrapper>
            <StyledHr margin={margin} />
        </HrWrapper>
    );
};

export default Hr;

const HrWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0 ${({ theme }) => theme.size.layoutHorizonPadding};
`;

const StyledHr = styled.hr<IHr>`
    text-align: center;
    width: 100%;
    margin: ${({ margin }) => margin};
    color: ${({theme}) => theme.color.lightGray}
`;
