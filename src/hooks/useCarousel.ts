/* eslint-disable react-hooks/exhaustive-deps */
import { useRef } from "react";

interface IUseCarousel {
    dist: number;
}

const useCarousel = ({ dist }: IUseCarousel) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    const onClickLeft = () => {
        if (!wrapperRef.current) return;
        wrapperRef.current.scrollTo({
            top: 0,
            left: wrapperRef.current.scrollLeft - dist,
            behavior: "smooth",
        });
    };

    const onClickRight = () => {
        if (!wrapperRef.current) return;
        wrapperRef.current.scrollTo({
            top: 0,
            left: wrapperRef.current.scrollLeft + dist,
            behavior: "smooth",
        });
    };

    return { wrapperRef, onClickLeft, onClickRight };
};

export default useCarousel;
