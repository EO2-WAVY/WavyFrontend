import { useState, useEffect } from "react";

interface useCountdownProps {
    endTime: number;
    onEnd?: () => void;
    onChange?: () => void;
}

const useCountdown = ({ endTime, onEnd, onChange }: useCountdownProps) => {
    const [remainTime, setRemainTime] = useState<number>(endTime);

    useEffect(() => {
        const handleInterval = () => {
            if (onChange) onChange();

            if (remainTime - 1 === 0) {
                if (onEnd) onEnd();
            }

            setRemainTime(remainTime - 1);
        };

        const interval = setInterval(handleInterval, 1000);

        return () => clearInterval(interval);
    }, [onChange, onEnd, remainTime]);

    return {
        remainTime
    };
};

export default useCountdown;
