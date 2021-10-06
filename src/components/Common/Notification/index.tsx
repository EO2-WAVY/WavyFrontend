import ReactDOM from "react-dom";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import useCountdown from "hooks/useCountdown";
import useProgress from "hooks/useProgress";
import { leftInitUpExitVariants } from "constants/motions";

interface NotificationProps {
    open: boolean;
    message: string;
    handleClose: () => void;
    autoHideDuration?: number;
}

const Notification = ({
    open,
    message,
    handleClose,
    autoHideDuration = 3,
}: NotificationProps) => {
    const { remainTime } = useCountdown({
        endTime: autoHideDuration,
        onEnd: handleClose,
    });

    const { percent } = useProgress({
        currentValue: autoHideDuration - remainTime + 1,
        goalValue: autoHideDuration,
    });

    return ReactDOM.createPortal(
        <AnimatePresence exitBeforeEnter>
            {open && (
                <Wrapper
                    variants={leftInitUpExitVariants}
                    animate="animate"
                    initial="initial"
                    exit="exit"
                >
                    <Content>
                        <p>{message}</p>
                        <Progressbar percent={percent} />
                    </Content>
                </Wrapper>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default Notification;

const Wrapper = styled(motion.div)`
    position: fixed;
    top: 1.5rem;
    right: 1.5rem;
`;

const Content = styled.div`
    position: relative;
    width: 384px;
    max-width: calc(100vw - 24px * 2);
    margin-bottom: 16px;
    margin-left: auto;
    padding: 16px 24px;
    background-color: white;
    box-shadow: ${({ theme }) => theme.shadow.over};
`;

const Progressbar = styled.div<{ percent: number }>`
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ percent }) => percent}%;
    height: 3px;
    background-color: ${({ theme }) => theme.color.purple};
    transition: width 1s linear;
`;
