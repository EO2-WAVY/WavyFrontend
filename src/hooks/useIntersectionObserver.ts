import { useEffect } from "react";

interface IUseIntersectionObserver {
    root?: null;
    rootMargin?: string;
    threshold?: number;
    target: HTMLElement | null;
    onIntersect: IntersectionObserverCallback;
}

const useIntersectionObserver = ({
    root,
    rootMargin = "0px",
    threshold = 1,
    target,
    onIntersect,
}: IUseIntersectionObserver) => {
    useEffect(() => {
        if (!target) return;
        
        const observer: IntersectionObserver = new IntersectionObserver(
            onIntersect,
            { root, rootMargin, threshold }
        );
        observer.observe(target);

        return () => observer.unobserve(target);
    }, [onIntersect, root, rootMargin, target, threshold]);
};

export default useIntersectionObserver;
