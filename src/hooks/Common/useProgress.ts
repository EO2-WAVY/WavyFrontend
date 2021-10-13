import { useCallback, useEffect, useState } from "react";

interface useProgressProps<T> {
    currentValue: T;
    goalValue: T;
    onEnded?: () => void;
}

type valueType = number | boolean;

const useProgress = ({
    currentValue,
    goalValue,
    onEnded = () => {},
}: useProgressProps<valueType>) => {
    const [percent, setPersent] = useState<number>(0);

    const calcPersent = useCallback(() => {
        if (typeof currentValue !== "number")
            return currentValue === goalValue ? 100 : 0;

        const currentPercent = (currentValue * 100) / +goalValue;
        if (currentPercent >= 100) onEnded();

        return currentPercent;
    }, [currentValue, goalValue, onEnded]);

    useEffect(() => {
        setPersent(calcPersent());
    }, [calcPersent]);

    return { percent };
};

export default useProgress;
