import { AnimatePresence } from "framer-motion";
import {
    ReactNode,
    Children,
    isValidElement,
    cloneElement,
    useState,
} from "react";

interface StepProps {
    children: ReactNode;
}
const Step = ({ children }: StepProps) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const { length } = Children.toArray(children);

    const setNextStep = () => {
        if (length === currentIndex + 1) return;
        setCurrentIndex(currentIndex + 1);
    };

    const setPrevStep = () => {
        if (currentIndex === 0) return;
        setCurrentIndex(currentIndex - 1);
    };

    return (
        <AnimatePresence exitBeforeEnter>
            {Children.map(children, (child, index) => {
                if (isValidElement(child) && currentIndex === index) {
                    return cloneElement(child, {
                        setNextStep,
                        setPrevStep,
                        index,
                    });
                }
            })}
        </AnimatePresence>
    );
};

export default Step;
