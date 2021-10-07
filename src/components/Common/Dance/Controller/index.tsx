import styled from "styled-components";

import Icon from "components/Common/Icon";
import ControllerPorgressbar from "components/Common/Dance/Controller/ControllerProgressbar";
import PlayingIcon from "components/Common/Dance/Controller/PlayingIcon";
import PlaybackRate from "components/Common/Dance/Controller/PlaybackRate";
import LayoutIcon from "components/Common/Dance/Controller/LayoutIcon";
import MirroredIcon from "components/Common/Dance/Controller/MirroredIcon";
import KeyboardEffect from "components/Common/Dance/Controller/KeyboardEffect";

import useControllerPlayedSecond from "hooks/Dance/Controller/useControllerPlayedSecond";
import {
    fmToMinAndSec,
    fmToSeconds,
} from "utils/formatting/formattingDuration";
import { useMemo } from "react";

interface ControllerProps {
    rvDuration: string;
}

const Controller = ({ rvDuration }: ControllerProps) => {
    const { playedSecond } = useControllerPlayedSecond();

    const fmPlayedSecond = fmToMinAndSec(playedSecond);
    const numDuration = useMemo(() => fmToSeconds(rvDuration), [rvDuration]);
    const fmDuration = useMemo(() => fmToMinAndSec(numDuration), [numDuration]);

    return (
        <Wrapper>
            <ControllerPorgressbar rvDuration={numDuration} />

            <ControlWrapper>
                <ControlLeft>
                    <PlayingIcon />
                    <TimeSpan>
                        <strong>{fmPlayedSecond}</strong> / {fmDuration}
                    </TimeSpan>
                </ControlLeft>

                <ControlRight>
                    <Icon name="controller_loop" />
                    <MirroredIcon />
                    <Icon name="controller_marker" />
                    <PlaybackRate />
                    <LayoutIcon />
                </ControlRight>
            </ControlWrapper>

            <KeyboardEffect />
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
