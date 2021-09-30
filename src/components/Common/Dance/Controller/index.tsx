import styled from "styled-components";

import Icon from "components/Common/Icon";
import ControllerPorgressbar from "components/Common/Dance/Controller/ControllerProgressbar";

const Controller = () => {
    return (
        <Wrapper>
            <ControllerPorgressbar />

            <ControlWrapper>
                <ControlLeft>
                    <Icon name="controller_play_circle" />
                    <TimeSpan>
                        <strong>00:15</strong> / 03:30
                    </TimeSpan>
                </ControlLeft>

                <ControlRight>
                    <Icon name="controller_loop" />
                    <Icon name="controller_graph" />
                    <Icon name="controller_marker" />
                    <IconSpan>재생속도</IconSpan>
                    <Icon name="controller_fullscreen" />
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
`;

const IconSpan = styled.span`
    color: ${({ theme }) => theme.color.black};
    font-size: 14px;
`;
