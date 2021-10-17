import { motion, Variants } from "framer-motion";
import styled from "styled-components";

interface IHr {
    margin?: string;
    variants?: Variants;
}

const Hr = ({ margin = "0", variants }: IHr) => {
    return (
        <StyledHr
            margin={margin}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
        />
    );
};

export default Hr;

// const HrWrapper = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     padding: 0 ${({ theme }) => theme.size.layoutHorizonPadding};
// `;

const StyledHr = styled(motion.hr)<IHr>`
    text-align: center;
    width: 100%;
    margin: ${({ margin }) => margin};
    color: ${({ theme }) => theme.color.lightGray};
`;
