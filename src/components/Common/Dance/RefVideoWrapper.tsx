import { ReactNode } from "react";
import styled from "styled-components";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

import layout_big from "assets/images/Dance/layout_big.svg";
import layout_small from "assets/images/Dance/layout_small.svg";

import { defaultBtnSwapVariants } from "constants/motions";
import useLayout from "hooks/Dance/useLayout";
import useViewport from "hooks/Common/useViewport";
import Step from "../Step";

const DRAG_WIDTH: number = 300;
const DRAG_HEIGHT: number = (300 * 16) / 9;

interface RefVideoWrapperProps {
    children: ReactNode;
    showLayoutBtn?: boolean;
}

const RefVideoWrapper = ({
    children,
    showLayoutBtn = true,
}: RefVideoWrapperProps) => {
    const { layout, onClickLayoutBig, onClickLayoutSmall } = useLayout();

    const { width, height } = useViewport();

    return (
        <Wrapper
            key="layout"
            layoutType={layout}
            drag={layout === "drag"}
            layout
            dragConstraints={{
                top: 0,
                bottom: height - DRAG_HEIGHT,
                left: 0,
                right: width - DRAG_WIDTH,
            }}
        >
            <AnimateSharedLayout>
                <Step>{children}</Step>
            </AnimateSharedLayout>

            {showLayoutBtn && (
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
            )}
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

    font-size: ${({ layoutType }) => (layoutType === "drag" ? 14 : 16)}px;

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
    width: ${DRAG_WIDTH}px;
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
    z-index: 10;
`;

const ToBigBtn = styled(LayoutBtn)`
    background: url(${layout_big});
    background-size: cover;
`;

const ToSmallBtn = styled(LayoutBtn)`
    background: url(${layout_small});
    background-size: cover;
`;
