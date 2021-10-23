import { useMemo } from "react";
import styled from "styled-components";

import ControllerProgressbar from "components/Common/Dance/Controller/ControllerProgressbar";
import PlayingButton from "components/Common/Dance/Controller/PlayingButton";
import PlaybackRate from "components/Common/Dance/Controller/PlaybackRate";
import LayoutButton from "components/Common/Dance/Controller/LayoutButton";
import MirroredButton from "components/Common/Dance/Controller/MirroredButton";
import KeyboardEffect from "components/Common/Dance/Controller/KeyboardEffect";

import useControllerPlayedSecond from "hooks/Dance/Controller/useControllerPlayedSecond";
import {
    fmToMinAndSec,
    fmToSeconds,
} from "utils/formatting/formattingDuration";
import GraphButton from "./GraphButton";
import SoundSlider from "./SoundSlider";

interface ControllerProps {
    rvDuration: string;
    isLinkPractice?: boolean;
    isAnalysis?: boolean;
}

const Controller = ({
    rvDuration,
    isLinkPractice = false,
    isAnalysis = false,
}: ControllerProps) => {
    const { playedSecond } = useControllerPlayedSecond();

    const fmPlayedSecond = fmToMinAndSec(playedSecond);
    const numDuration = useMemo(() => fmToSeconds(rvDuration), [rvDuration]);
    const fmDuration = useMemo(() => fmToMinAndSec(numDuration), [numDuration]);

    return (
        <Wrapper>
            <ControllerProgressbar rvDuration={numDuration} />

            <ControlWrapper>
                <ControlLeft>
                    <PlayingButton />

                    {!isLinkPractice && (
                        <TimeSpan>
                            <strong>{fmPlayedSecond}</strong> / {fmDuration}
                        </TimeSpan>
                    )}

                    <SoundSlider />
                </ControlLeft>

                <ControlRight>
                    {/* <Icon name="controller_loop" />
                    <Icon name="controller_marker" /> */}
                    {isAnalysis && <GraphButton />}
                    <MirroredButton />
                    <PlaybackRate />
                    <LayoutButton />
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
        fill: ${({ theme }) => theme.color.purple};
    }
`;
