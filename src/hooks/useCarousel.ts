/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";

interface IUseCarousel {
    dist: number;
}

const useCarousel = ({ dist }: IUseCarousel) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    let currentScrollPos = 0;

    const onClickLeft = () => {
        if (!wrapperRef.current) return;
        wrapperRef.current.scrollTo({
            top: 0,
            left: currentScrollPos - dist,
            behavior: "smooth",
        });
        currentScrollPos -= dist;
    };

    const onClickRight = () => {
        if (!wrapperRef.current) return;
        wrapperRef.current.scrollTo({
            top: 0,
            left: currentScrollPos + dist,
            behavior: "smooth",
        });
        currentScrollPos += dist;
    };

    useEffect(() => {
        const handleScroll: EventListener = (e: Event) => {
            const { scrollLeft } = e.target as HTMLDivElement;
            currentScrollPos = scrollLeft;
        };
        wrapperRef.current?.addEventListener("scroll", handleScroll);

        return () => {
            wrapperRef.current?.removeEventListener("scroll", handleScroll);
        };
    }, [wrapperRef]);

    return { wrapperRef, onClickLeft, onClickRight };
};

export default useCarousel;
