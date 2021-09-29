import styled from "styled-components";
import { motion } from "framer-motion";
import { defaultPageFadeInVariants } from "constants/motions";
import ReadyPictogram from "./ReadyPicogram";


interface ReadyProps {
    index?: number;
    setNextStep?: () => void;
}

const Ready = ({ index, setNextStep }: ReadyProps) => {
    return (
        <Wrapper
            key={index}
            variants={defaultPageFadeInVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <ReadyPictogram />

            <NotiTitle>시작하려면 화면에 표시된 자세를 유지하세요</NotiTitle>
            <NotiDsc>시작한 후 중간에 멈추거나 다시 출 수 없습니다</NotiDsc>
        </Wrapper>
    );
};

export default Ready;

const Wrapper = styled(motion.aside)`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background: linear-gradient(180deg, #691ec9 17.7%, #410989 59.71%);
    color: ${({ theme }) => theme.color.white};

    padding: 2em;
`;

const NotiTitle = styled(motion.h3)``;

const NotiDsc = styled(motion.span)``;
