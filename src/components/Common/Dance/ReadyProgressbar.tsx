import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import useCountdown from "hooks/Common/useCountdown";
import useProgress from "hooks/Common/useProgress";

interface ReadyProgressbarProps {
    onEnded: () => void;
}

const GOAL_TIME: number = 10000;

const ReadyProgressbar = ({ onEnded }: ReadyProgressbarProps) => {
    const { remainTime } = useCountdown({ endTime: GOAL_TIME });

    const { percent } = useProgress({
        currentValue: GOAL_TIME - remainTime,
        goalValue: GOAL_TIME,
        onEnded,
    });

    return (
        <Wrapper>
            <ProgressOuter>
                <ProgressInner percent={percent} />
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

const ProgressInner = styled.div<{ percent: number }>`
    position: relative;
    width: ${({ percent }) => percent}%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.lightPurple};
    border-radius: 40px;

    transition: width 0.4s linear 0s;

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
