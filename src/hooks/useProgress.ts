import { useEffect, useState } from "react";

interface useProgressProps<T> {
    initialValue: T;
    goalValue: T;
    onEnded?: () => void;
    onEndedDelay?: number;
}

type valueType = number | boolean;

const useProgress = ({
    initialValue,
    goalValue,
    onEnded = () => {},
    onEndedDelay = 0,
}: useProgressProps<valueType>) => {
    const [currentValue, setCurrentValue] =
        useState<typeof initialValue>(initialValue);

    const calcPersent = () => {
        if (typeof initialValue !== "number")
            return currentValue === goalValue ? 100 : 0;
    };

    const [percent, setPersent] = useState<number>();

    useEffect(() => {}, [currentValue]);

    return { percent, setCurrentValue };
};

export default useProgress;
