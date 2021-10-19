import { Variants } from "framer-motion";

export const defaultEasing = [0.6, -0.05, 0.01, 0.99];

export const staggerHalf: Variants = {
    animate: { transition: { staggerChildren: 0.05 } },
};

export const staggerOne: Variants = {
    animate: { transition: { staggerChildren: 0.1 } },
};

export const defaultPageFadeInVariants: Variants = {
    initial: {
        opacity: 0,
        transition: { duration: 0.6, ease: defaultEasing },
        willChange: "opacity, transform",
    },
    animate: {
        opacity: 1,
        transition: { duration: 0.6, ease: defaultEasing },
        willChange: "opacity, transform",
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.6, ease: defaultEasing },
        willChange: "opacity, transform",
    },
};

export const defaultFadeInUpVariants: Variants = {
    initial: {
        y: 60,
        opacity: 0,
        transition: { duration: 0.6, ease: defaultEasing },
        willChange: "opacity, transform",
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: defaultEasing },
        willChange: "opacity, transform",
    },
    exit: {
        y: 60,
        opacity: 0,
        transition: { duration: 0.3, ease: defaultEasing },
        willChange: "opacity, transform",
    },
};

export const defaultBtnSwapVariants: Variants = {
    initial: {
        y: -20,
        opacity: 0,
        transition: { duration: 0.5, ease: defaultEasing },
        willChange: "opacity, transform",
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: defaultEasing },
        willChange: "opacity, transform",
    },
    exit: {
        y: -20,
        opacity: 0,
        transition: { duration: 1, ease: defaultEasing },
        willChange: "opacity, transform",
    },
};

export const cardNavUpVariants: Variants = {
    initial: {
        y: 90,
        transition: { duration: 0.6, ease: defaultEasing },
        willChange: "transform",
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: defaultEasing,
        },
        willChange: "opacity, transform",
    },
    exit: {
        y: 90,
        opacity: 0,
        transition: { duration: 0.5, ease: defaultEasing },
        willChange: "opacity, transform",
    },
};

export const cardOverlayVariants: Variants = {
    initial: {
        opacity: 0,
        transition: { duration: 0.6, ease: defaultEasing },
        willChange: "opacity",
    },
    animate: {
        opacity: 0.4,
        transition: { duration: 0.6, ease: defaultEasing },
        willChange: "opacity",
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.5, ease: defaultEasing },
        willChange: "opacity",
    },
};

export const modalOverlayVariants: Variants = {
    initial: {
        opacity: 0,
        transition: { duration: 0.6, ease: defaultEasing },
        willChange: "opacity",
    },
    animate: {
        opacity: 0.4,
        transition: { duration: 0.6, ease: defaultEasing },
        willChange: "opacity",
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.3, ease: defaultEasing },
        willChange: "opacity",
    },
};

export const modalCenterFadeInUpVariants: Variants = {
    initial: {
        opacity: 0,
        x: "-50%",
        y: "-45%",
        transition: { duration: 0.6, ease: defaultEasing },
        willChange: "opacity, transform",
    },
    animate: {
        opacity: 1,
        x: "-50%",
        y: "-50%",
        transition: {
            duration: 0.6,
            ease: defaultEasing,
            staggerChildren: 0.1,
        },
        willChange: "opacity, transform",
    },
    exit: {
        opacity: 0,
        x: "-50%",
        y: "-45%",
        transition: { duration: 0.3, ease: defaultEasing },
        willChange: "opacity, transform",
    },
};

export const leftInitUpExitVariants: Variants = {
    initial: {
        x: 90,
        opacity: 0,
        transition: { duration: 0.6, ease: defaultEasing },
        willChange: "opacity, transform",
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: defaultEasing,
        },
        willChange: "opacity, transform",
    },
    exit: {
        x: 0,
        y: -90,
        opacity: 0,
        transition: { duration: 0.5, ease: defaultEasing },
        willChange: "opacity, transform",
    },
};

export const videoCardVolumeVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
        transition: { duration: 0.3, ease: defaultEasing },
        willChange: "opacity, transform",
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.3, ease: defaultEasing },
        willChange: "opacity, transform",
    },
};

export const mobileLogoAnimationVariants: Variants = {
    animate: {
        y: [0, -10, 0],
        scale: [1, 1.6, 1, 1.2, 1, 1.5, 1],
        rotate: [0, 10, -5, 15, -10, 0],
        opacity: 1,
        transition: {
            duration: 10,
            ease: defaultEasing,
            loop: Infinity,
        },

        willChange: "all",
    },
};
