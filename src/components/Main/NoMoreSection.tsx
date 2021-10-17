import styled from "styled-components";
import { motion } from "framer-motion";
import LinkInput from "./LinkInput";
import { defaultFadeInUpVariants, staggerOne } from "constants/motions";

const NoMoreSection = () => {
    return (
        <Wrapper
            variants={staggerOne}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Span variants={defaultFadeInUpVariants}>
                저희가 준비한 영상은 여기까지 입니다 😭
            </Span>
            <BtnInfoSpan variants={defaultFadeInUpVariants}>
                원하는 춤, 동영상이 없으면 <strong>YouTube 링크</strong>를 통해
                배워보는 건 어떨까요 !
            </BtnInfoSpan>
            <LinkInput />
        </Wrapper>
    );
};

export default NoMoreSection;

const Wrapper = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 120px 0 60px 0;
`;

const Span = styled(motion.span)`
    font-size: 1.25rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.color.black};
`;

const BtnInfoSpan = styled(motion.span)`
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.color.lightGray};

    & > strong {
        color: ${({ theme }) => theme.color.purple};
    }
`;
