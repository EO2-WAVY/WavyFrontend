import { ReactNode } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import layout_big from "assets/images/Dance/layout_big.svg";
import layout_small from "assets/images/Dance/layout_small.svg";

import { defaultBtnSwapVariants } from "constants/motions";
import useLayout from "hooks/Dance/useLayout";
import Step from "../Step";

interface RefVideoWrapperProps {
    children: ReactNode;
}

const RefVideoWrapper = ({ children }: RefVideoWrapperProps) => {
    const { layout, onClickLayoutBig, onClickLayoutSmall } = useLayout();

    return (
        <Wrapper layoutType={layout} drag={layout === "drag"}>
            <Step>{children}</Step>

            <AnimatePresence exitBeforeEnter>
                {layout === "half" ? (
                    <ToBigBtn
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={onClickLayoutBig}
                        variants={defaultBtnSwapVariants}
                    />
                ) : (
                    <ToSmallBtn
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={onClickLayoutSmall}
                        variants={defaultBtnSwapVariants}
                    />
                )}
            </AnimatePresence>
        </Wrapper>
    );
};

export default RefVideoWrapper;

interface WrapperProps {
    layoutType: "half" | "drag";
}

const Wrapper = styled(motion.aside)<WrapperProps>`
    aspect-ratio: 9 / 16;
    flex-shrink: 0;
    overflow: hidden;
    z-index: 1;

    ${({ layoutType }) =>
        layoutType === "half"
            ? `
    position: relative;
    height: 100%;
    `
            : `
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    border-radius: 20px;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 85%;
        z-index: 2;
    }
    `}
`;

const LayoutBtn = styled(motion.button)`
    position: absolute;
    bottom: 12px;
    right: 12px;
    width: 50px;
    height: 50px;
`;

const ToBigBtn = styled(LayoutBtn)`
    background: url(${layout_big});
    background-size: cover;
`;

const ToSmallBtn = styled(LayoutBtn)`
    background: url(${layout_small});
    background-size: cover;
`;
