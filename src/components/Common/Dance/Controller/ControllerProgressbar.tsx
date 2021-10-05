import { MouseEvent, useRef } from "react";
import styled from "styled-components";

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

    const onClick = (e: MouseEvent<HTMLDivElement>) => {
        if (!barRef.current) return;

        const { clientX } = e;
        const seekTime = (clientX * rvDuration) / barRef.current.clientWidth;
        seekTo(seekTime);
    };

    return (
        <Outer onClick={onClick} ref={barRef}>
            <Inner percent={percent} />
        </Outer>
    );
};

export default ControllerProgressbar;

const Outer = styled.div`
    width: 100%;
    height: 6px;
    background-color: ${({ theme }) => theme.color.lightGray};
    cursor: pointer;
`;

const Inner = styled.div<{ percent: number }>`
    width: ${({ percent }) => percent}%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.purple};
`;
