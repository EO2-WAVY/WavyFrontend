import { RefObject, useCallback, useState, MouseEvent } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import Icon from "components/Common/Icon";
import { IMarker } from "store/Common";
import {
    markerContextVariants,
    markerFadeInDownVariants,
} from "constants/motions";
import usePlayerInstance from "hooks/Dance/Controller/usePlayerInstance";
import { refVideoRefState, userVideoRefState } from "store/Dance/Controller";
import useToggle from "hooks/Common/useToggle";

interface MarkerProps extends IMarker {
    rvDuration: number;
    handleClose: () => void;
    wrapperRef: RefObject<HTMLDivElement>;
}
const Marker = ({
    index,
    rvDuration,
    wrapperRef,
    clientX,
    handleClose,
}: MarkerProps) => {
    // 시점 이동을 위해
    const [xPos, setXPos] = useState<number>(clientX);
    const { seekTo } = usePlayerInstance(refVideoRefState);
    const { seekTo: userSeekTo } = usePlayerInstance(userVideoRefState);

    const seekToWithPos = useCallback(
        (clientX: number) => {
            if (!wrapperRef.current) return;

            const seekTime =
                (clientX * rvDuration) / wrapperRef.current.clientWidth;

            seekTo(seekTime);
            userSeekTo(seekTime);
        },
        [rvDuration, seekTo, userSeekTo, wrapperRef]
    );

    const onClick = () => {
        seekToWithPos(xPos);
    };

    const onDrag = (e: globalThis.MouseEvent | TouchEvent | PointerEvent) => {
        const { left } = (e.target as HTMLElement).getBoundingClientRect();
        setXPos(left);
    };

    // 삭제를 위해
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isHover, _, setIsHover] = useToggle(false);

    const onClickRemoveMarker = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        handleClose();
    };

    return (
        <Wrapper
            initialXPos={clientX}
            onClick={onClick}
            variants={markerFadeInDownVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            drag={"x"}
            dragTransition={{ power: 0 }}
            onDrag={onDrag}
            dragConstraints={wrapperRef}
            whileHover={{ scale: 1.2 }}
            onHoverStart={() => {
                setIsHover(true);
            }}
            onHoverEnd={() => {
                setIsHover(false);
            }}
        >
            <Icon name="controller_active_marker" id="svg" />

            <AnimatePresence exitBeforeEnter>
                {isHover && (
                    <CloseBtnWrapper
                        variants={markerContextVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <Icon
                            name="controller_close_marker"
                            onClick={onClickRemoveMarker}
                        />
                    </CloseBtnWrapper>
                )}
            </AnimatePresence>
        </Wrapper>
    );
};

export default Marker;

interface WrapperProps {
    initialXPos: number;
}

const Wrapper = styled(motion.div)<WrapperProps>`
    position: absolute;
    left: ${({ initialXPos }) => initialXPos}px;
    width: 24px;
    height: 24px;
    z-index: 999;
    transform-origin: bottom;
    cursor: grab;

    & > svg {
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    &:active {
        cursor: grabbing;
    }
`;

const CloseBtnWrapper = styled(motion.div)`
    position: absolute;
    bottom: 0;
    left: 0;

    width: calc(100% + 14px);
    height: calc(100% + 14px);
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;

    & > svg {
        width: 14px;
        height: 14px;
        cursor: pointer;
    }
`;
