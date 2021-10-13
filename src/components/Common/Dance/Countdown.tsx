import styled from "styled-components";
import { motion } from "framer-motion";

import useCountdown from "hooks/Common/useCountdown";
import {
    defaultFadeInUpVariants,
    defaultPageFadeInVariants,
} from "constants/motions";

const COUNTDOWN_TIME: number = 3;

interface CountdownProps {
    onCountdownEnd: () => void;
}

const Countdown = ({ onCountdownEnd }: CountdownProps) => {
    const { remainTime } = useCountdown({
        endTime: COUNTDOWN_TIME,
        onEnd: onCountdownEnd,
    });

    return (
        <Wrapper
            key="countdown"
            variants={defaultPageFadeInVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <RemainSpan key={remainTime} variants={defaultFadeInUpVariants}>
                {remainTime}
            </RemainSpan>
        </Wrapper>
    );
};

export default Countdown;

const Wrapper = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: rgba(29, 29, 31, 0.6);
    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const RemainSpan = styled(motion.span)`
    color: ${({ theme }) => theme.color.white};
    font-size: 8rem;
    font-weight: bold;
`;
