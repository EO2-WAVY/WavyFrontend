import useControllerPlayedSecond from "hooks/Dance/Controller/useControllerPlayedSecond";
import useProgress from "hooks/useProgress";
import styled from "styled-components";

interface ControllerProgressbarProps {
    rvDuration: number;
}

const ControllerPorgressbar = ({ rvDuration }: ControllerProgressbarProps) => {
    const { playedSecond } = useControllerPlayedSecond();
    const { percent } = useProgress({
        currentValue: playedSecond,
        goalValue: rvDuration,
    });

    return (
        <Outer>
            <Inner percent={percent} />
        </Outer>
    );
};

export default ControllerPorgressbar;

const Outer = styled.div`
    width: 100%;
    height: 6px;
    background-color: ${({ theme }) => theme.color.lightGray};
`;

const Inner = styled.div<{ percent: number }>`
    width: ${({ percent }) => percent}%;
    height: 100%;
    background-color: ${({ theme }) => theme.color.purple};
`;
