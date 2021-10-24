import styled from "styled-components";
import { motion } from "framer-motion";
import { defaultFadeInUpVariants } from "constants/motions";

const AnalysesEmpty = () => {
    return (
        <Wrapper
            variants={defaultFadeInUpVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <span>
                <strong>도전하기</strong>를 통해 내가 부족한 부분이 어딘지
                배워보세요 !
            </span>
        </Wrapper>
    );
};

export default AnalysesEmpty;

const Wrapper = styled(motion.div)`
    width: 100%;
    height: 240px;
    display: flex;
    justify-content: center;
    align-items: center;

    & > span {
        font-size: 1rem;
        color: ${({ theme }) => theme.color.gray};

        & > strong {
            font-weight: 500;
            color: ${({ theme }) => theme.color.purple};
        }
    }
`;
