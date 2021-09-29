import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import useCountdown from "hooks/useCountdown";

const ReadyProgressbar = () => {
    const { remainTime } = useCountdown({ endTime: 10 });
    

    return (
        <Wrapper>
            <ProgressOuter>
                <ProgressInner />
            </ProgressOuter>
        </Wrapper>
    );
};

export default ReadyProgressbar;

const Wrapper = styled(motion.div)`
    width: 80%;
    height: 0.625em;
`;

const ProgressOuter = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.lightGray};
    border-radius: 40px;
    overflow: hidden;
`;

const ProgressOverlay = keyframes`
    0% {
        transform:  scaleX(0);
        opacity: .1;
    }
    20% {
        transform:  scaleX(0);
        opacity: .5;
    }
    100% {
        transform:  scaleX(1);
        opacity: 0;
    }
`;

const ProgressInner = styled.div`
    position: relative;
    width: 50%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.lightPurple};
    border-radius: 40px;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
        transform-origin: left;
        animation: ${ProgressOverlay} 2.4s cubic-bezier(0.23, 1, 0.32, 1)
            infinite;
    }
`;
