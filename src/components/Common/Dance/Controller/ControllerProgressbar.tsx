import {
    MouseEvent as ReactMouseEvent,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import styled from "styled-components";
import { throttle } from "lodash";

import useProgress from "hooks/useProgress";
import useControllerPlayedSecond from "hooks/Dance/Controller/useControllerPlayedSecond";
import usePlayerInstance from "hooks/Dance/Controller/usePlayerInstance";
import { refVideoRefState } from "store/Dance/Controller";

interface ControllerProgressbarProps {
    rvDuration: number;
}

const ControllerProgressbar = ({ rvDuration }: ControllerProgressbarProps) => {
    const barRef = useRef<HTMLDivElement>(null);
    const { seekTo } = usePlayerInstance(refVideoRefState);

    const { playedSecond } = useControllerPlayedSecond();
    const { percent } = useProgress({
        currentValue: playedSecond,
        goalValue: rvDuration,
    });

    const seekToWithPos = useCallback(
        (clientX: number) => {
            if (!barRef.current) return;
            const seekTime =
                (clientX * rvDuration) / barRef.current.clientWidth;
            seekTo(seekTime);
        },
        [rvDuration, seekTo]
    );

    const onClick = (e: ReactMouseEvent<HTMLDivElement>) => {
        const { clientX } = e;
        seekToWithPos(clientX);
    };

    const [isMouseDown, setIsMouseDown] = useState<boolean>(false);

    const onMouseDown = () => {
        setIsMouseDown(true);
    };

    const onMouseUp = useCallback(() => {
        setIsMouseDown(false);
    }, []);

    useEffect(() => {
        const throttleOnDrag = throttle((e: MouseEvent) => {
            if (!isMouseDown) return;
            const { clientX } = e;
            seekToWithPos(clientX);
        }, 100);

        window.addEventListener("mousemove", throttleOnDrag);
        window.addEventListener("mouseup", onMouseUp);

        return () => {
            window.removeEventListener("mousemove", throttleOnDrag);
            window.removeEventListener("mouseup", onMouseUp);
        };
    }, [isMouseDown, onMouseUp, seekToWithPos]);

    return (
        <Outer onClick={onClick} ref={barRef} onMouseDown={onMouseDown}>
            <Inner percent={percent} />
        </Outer>
    );
};

export default ControllerProgressbar;

const Outer = styled.div`
    position: relative;
    width: 100%;
    height: 6px;
    background-color: ${({ theme }) => theme.color.lightGray};
    cursor: pointer;
`;

const Inner = styled.div<{ percent: number }>`
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ percent }) => percent}%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.purple};
`;
