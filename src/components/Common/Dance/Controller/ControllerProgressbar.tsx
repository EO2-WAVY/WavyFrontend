import {
    MouseEvent as ReactMouseEvent,
    useCallback,
    useEffect,
    useState,
} from "react";
import styled from "styled-components";
import { throttle } from "lodash";

import useProgress from "hooks/Common/useProgress";
import useControllerPlayedSecond from "hooks/Dance/Controller/useControllerPlayedSecond";
import usePlayerInstance from "hooks/Dance/Controller/usePlayerInstance";
import { refVideoRefState, userVideoRefState } from "store/Dance/Controller";
import WrongSections from "./WrongSections";
import useControllerProgressbarRef from "hooks/Dance/Controller/useControllerProgressbarRef";

interface ControllerProgressbarProps {
    rvDuration: number;
    wrong_sections?: string[];
}

const ControllerProgressbar = ({
    rvDuration,
    wrong_sections = [],
}: ControllerProgressbarProps) => {
    const { controllerProgressbarRef, setControllerProgressbarRef } =
        useControllerProgressbarRef();
    const { seekTo } = usePlayerInstance(refVideoRefState);
    const { seekTo: userSeekTo } = usePlayerInstance(userVideoRefState);

    const { playedSecond } = useControllerPlayedSecond();
    const { percent } = useProgress({
        currentValue: playedSecond,
        goalValue: rvDuration,
    });

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
        <Outer
            onClick={onClick}
            ref={setControllerProgressbarRef}
            onMouseDown={onMouseDown}
        >
            <Inner percent={percent} />
            {wrong_sections && (
                <WrongSections
                    wrong_sections={wrong_sections}
                    barRef={controllerProgressbarRef}
                    rvDuration={rvDuration}
                />
            )}
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
