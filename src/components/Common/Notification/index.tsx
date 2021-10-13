import styled from "styled-components";
import { motion } from "framer-motion";

import useProgress from "hooks/Common/useProgress";
import { leftInitUpExitVariants } from "constants/motions";
import { INotification } from "store/Common";
import { useEffect, useState } from "react";

interface NotificationProps extends INotification {
    handleClose: () => void;
}

const Notification = ({
    title,
    description,
    handleClose,
    autoHideDuration,
}: NotificationProps) => {
    const [leftTime, setLeftTime] = useState<number>(0);

    useEffect(() => {
        const handleInterval = () => {
            setLeftTime((prev) => prev + 0.2);
        };

        const interval = setInterval(handleInterval, 200);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        if (leftTime >= autoHideDuration) {
            handleClose();
        }
    }, [autoHideDuration, handleClose, leftTime]);

    const { percent } = useProgress({
        currentValue: leftTime,
        goalValue: autoHideDuration,
    });

    return (
        <Wrapper
            layout
            variants={leftInitUpExitVariants}
            animate="animate"
            initial="initial"
            exit="exit"
        >
            <TitleSection>
                <Title>{title}</Title>
                <CloseBtn onClick={handleClose}>X</CloseBtn>
            </TitleSection>
            <p>{description}</p>
            <Progressbar percent={percent} />
        </Wrapper>
    );
};

export default Notification;

const Wrapper = styled(motion.div)`
    position: relative;
    width: 384px;
    max-width: calc(100vw - 24px * 2);
    margin-bottom: 16px;
    margin-left: auto;
    padding: 16px 24px;
    background-color: white;
    box-shadow: ${({ theme }) => theme.shadow.over};
`;

const TitleSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h3`
    color: ${({ theme }) => theme.color.purple};
`;

const CloseBtn = styled.button`
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 50%;

    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.white};
    transition: color 0.3s, background-color 0.3s;

    &:hover {
        color: ${({ theme }) => theme.color.white};
        background-color: ${({ theme }) => theme.color.purple};
    }
`;

const Progressbar = styled.div<{ percent: number }>`
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ percent }) => percent}%;
    height: 3px;
    background-color: ${({ theme }) => theme.color.purple};
    transition: width 0.2s linear;
`;
