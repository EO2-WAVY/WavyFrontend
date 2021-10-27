import { RefObject, useCallback, useRef, useState, MouseEvent } from "react";
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
import EmptyOverlay from "components/Common/EmptyOverlay";

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

    // context menu를 위해
    const [isContextOpen, toggleIsContextOpen] = useToggle(false);
    const currentMarkerRef = useRef<HTMLDivElement>(null);

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

    const onContextMenu = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        toggleIsContextOpen();
    };

    const onClickRemoveMarker = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        handleClose();
    };

    return (
        <Wrapper
            ref={currentMarkerRef}
            initialXPos={clientX}
            onClick={onClick}
            onContextMenu={onContextMenu}
            variants={markerFadeInDownVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            drag={isContextOpen ? false : "x"}
            dragTransition={{ power: 0 }}
            onDrag={onDrag}
            dragConstraints={wrapperRef}
            whileHover={{ scale: 1.1 }}
        >
            <Icon name="controller_active_marker" id="svg" />

            <AnimatePresence exitBeforeEnter>
                {isContextOpen && (
                    <>
                        <EmptyOverlay
                            key={`${index} overlay`}
                            handleClose={toggleIsContextOpen}
                        />
                        <ContextWrapper
                            key={`${index} context`}
                            variants={markerContextVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <ContextButton onClick={onClickRemoveMarker}>
                                X
                            </ContextButton>
                        </ContextWrapper>
                    </>
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

const ContextWrapper = styled(motion.div)`
    position: absolute;
    bottom: calc(100% + 6px);
    left: 50%;

    width: 60px;
    height: 30px;
    background-color: white;
`;

const ContextButton = styled.button`
    font-size: 12px;
    padding: 4px;
    background-color: red;
`;
