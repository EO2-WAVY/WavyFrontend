import { useCallback, useState, MouseEvent, useRef } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import Icon from "components/Common/Icon";
import { IMarker } from "store/Dance/Controller";
import {
    markerContextVariants,
    markerFadeInDownVariants,
    markerIconWrapperVariants,
} from "constants/motions";
import usePlayerInstance from "hooks/Dance/Controller/usePlayerInstance";
import { refVideoRefState, userVideoRefState } from "store/Dance/Controller";
import useToggle from "hooks/Common/useToggle";
import useIsLoop from "hooks/Dance/Controller/useIsLoop";
import useLoopMarker from "hooks/Dance/Controller/useLoopMarker";
import useControllerProgressbarRef from "hooks/Dance/Controller/useControllerProgressbarRef";

interface MarkerProps extends IMarker {
    rvDuration: number;
    handleClose: () => void;
}
const Marker = ({
    index,
    rvDuration,
    isLoopMarker,
    clientX,
    handleClose,
}: MarkerProps) => {
    // 시점 이동을 위해
    const { controllerProgressbarRef } = useControllerProgressbarRef();
    const [xPos, setXPos] = useState<number>(clientX);
    const { seekTo } = usePlayerInstance(refVideoRefState);
    const { seekTo: userSeekTo } = usePlayerInstance(userVideoRefState);
    const markerRef = useRef<HTMLDivElement>(null);

    // loop를 위해
    const { isLoop } = useIsLoop();
    const { toggleLoopMarker, updateLoopMarkerXPos } = useLoopMarker();

    const seekToWithPos = useCallback(
        (clientX: number) => {
            if (!controllerProgressbarRef) return;

            const seekTime =
                (clientX * rvDuration) / controllerProgressbarRef.clientWidth;

            seekTo(seekTime);
            userSeekTo(seekTime);
        },
        [controllerProgressbarRef, rvDuration, seekTo, userSeekTo]
    );

    const onClick = () => {
        console.log("나클릭");
        if (isLoop) {
            toggleLoopMarker(index, xPos);
        }
        seekToWithPos(xPos);
    };

    const onDragEnd = () => {
        if (!markerRef.current) return;
        const { left } = markerRef.current.getBoundingClientRect();
        setXPos(left);
        seekToWithPos(left);
        updateLoopMarkerXPos(index, left);
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
            ref={markerRef}
            onClick={onClick}
            variants={markerFadeInDownVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            drag={"x"}
            dragTransition={{ power: 0 }}
            onDragEnd={onDragEnd}
            // dragConstraints={controllerProgressbarRef && controllerProgressbarRef}
            whileHover={{ scale: 1.2 }}
            onHoverStart={() => {
                setIsHover(true);
            }}
            onHoverEnd={() => {
                setIsHover(false);
            }}
        >
            <AnimatePresence exitBeforeEnter>
                {isLoopMarker ? (
                    <IconWrapper
                        key={`${index} loop marker`}
                        variants={markerIconWrapperVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <Icon name="controller_loop_marker" />
                    </IconWrapper>
                ) : (
                    <IconWrapper
                        key={`${index} normal marker`}
                        variants={markerIconWrapperVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <Icon name="controller_active_marker" />
                    </IconWrapper>
                )}
            </AnimatePresence>

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

    &:active {
        cursor: grabbing;
    }
`;

const IconWrapper = styled(motion.div)`
    width: 100%;
    height: 100%;

    & > svg {
        height: 100%;
        z-index: -1;
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
