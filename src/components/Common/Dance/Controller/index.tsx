import styled from "styled-components";

import Icon from "components/Common/Icon";
import ControllerPorgressbar from "components/Common/Dance/Controller/ControllerProgressbar";
import PlayingIcon from "./PlayingIcon";
import useControllerPlayedSecond from "hooks/Dance/Controller/useControllerPlayedSecond";
import PlaybackRate from "./PlaybackRate";
import LayoutIcon from "./LayoutIcon";

interface ControllerProps {
    rvDuration: number;
}

const Controller = ({ rvDuration }: ControllerProps) => {
    const { playedSecond } = useControllerPlayedSecond();

    return (
        <Wrapper>
            <ControllerPorgressbar rvDuration={rvDuration} />

            <ControlWrapper>
                <ControlLeft>
                    <PlayingIcon />
                    <TimeSpan>
                        <strong>00:01</strong> / 03:30
                    </TimeSpan>
                </ControlLeft>

                <ControlRight>
                    <Icon name="controller_loop" />
                    <Icon name="controller_graph" />
                    <Icon name="controller_marker" />
                    <PlaybackRate />
                    <LayoutIcon />
                </ControlRight>
            </ControlWrapper>
        </Wrapper>
    );
};

export default Controller;

const Wrapper = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 48px;
    background-color: ${({ theme }) => theme.color.white};

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 999;
`;

const ControlWrapper = styled.div`
    width: 100%;
    height: 42px;
    padding: 4px 6px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    & svg {
        height: 100%;
        cursor: pointer;
    }
`;

const ControlLeft = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
`;

const TimeSpan = styled.span`
    color: ${({ theme }) => theme.color.black};

    & > strong {
        font-weight: 500;
    }
`;

const ControlRight = styled.div`
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    gap: 24px;

    & > .checked path {
        stroke: ${({ theme }) => theme.color.purple};
    }
`;
