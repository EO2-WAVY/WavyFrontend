import { MouseEvent, RefObject, useCallback, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import Icon from "components/Common/Icon";
import { IMarker } from "store/Common";
import { markerFadeInDownVariants } from "constants/motions";
import usePlayerInstance from "hooks/Dance/Controller/usePlayerInstance";
import { refVideoRefState, userVideoRefState } from "store/Dance/Controller";

interface MarkerProps extends IMarker {
    rvDuration: number;
    handleClose: () => void;
    wrapperRef: RefObject<HTMLDivElement>;
}
const Marker = ({
    index,
    rvDuration,
    wrapperRef,
    time,
    clientX,
    handleClose,
}: MarkerProps) => {
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

    return (
        <Wrapper
            initialXPos={clientX}
            onClick={onClick}
            variants={markerFadeInDownVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            drag="x"
            dragTransition={{ power: 0 }}
            onDrag={onDrag}
            dragConstraints={wrapperRef}
            whileHover={{ scale: 1.1 }}
        >
            <Icon name="controller_active_marker" />
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

    & > svg {
        width: 100%;
        height: 100%;
    }
`;
