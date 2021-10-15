import { defaultFadeInUpVariants, staggerOne } from "constants/motions";
import { motion } from "framer-motion";
import styled from "styled-components";

const ButtonSection = () => {
    return (
        <Wrapper
            variants={staggerOne}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <SaveBtn
                variants={defaultFadeInUpVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1 }}
            >
                저장하기
            </SaveBtn>
            <DropOutBtn variants={defaultFadeInUpVariants}>탈퇴하기</DropOutBtn>
        </Wrapper>
    );
};

export default ButtonSection;

const Wrapper = styled(motion.section)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 0 60px 0;
    gap: 18px;
`;

const SaveBtn = styled(motion.button)`
    width: 240px;
    height: 54px;
    border-radius: 100px;

    font-weight: 500;
    text-align: center;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.lightPurple};
`;

const DropOutBtn = styled(motion.button)`
    color: ${({ theme }) => theme.color.lightGray};
    font-size: 0.825rem;
    transition: color 0.3s;

    &:hover {
        color: ${({ theme }) => theme.color.gray};
    }
`;
