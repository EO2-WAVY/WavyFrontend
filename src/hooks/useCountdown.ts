import { useState, useEffect, useCallback } from "react";

interface useCountdownProps {
    endTime: number;
    onEnd?: () => void;
    onChange?: () => void;
}

const useCountdown = ({ endTime, onEnd, onChange }: useCountdownProps) => {
    const [isCounting, setIsCounting] = useState<boolean>(true);
    const [remainTime, setRemainTime] = useState<number>(endTime);

    const handleInterval = useCallback(() => {
        if (!isCounting) return;

        if (onChange) onChange();

        if (remainTime - 1 === 0) {
            setIsCounting(false);
            if (onEnd) onEnd();
        }

        setRemainTime((prev) => prev - 1);
    }, [isCounting, onChange, onEnd, remainTime]);

    useEffect(() => {
        const interval = setInterval(handleInterval, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [handleInterval, onChange, onEnd]);

    return {
        remainTime,
    };
};

export default useCountdown;
