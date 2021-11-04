import styled, { CSSProperties } from "styled-components";

import Icon from "components/Common/Icon";
import Slider from "rc-slider";
import usePlayerVolume from "hooks/Dance/usePlayerVolume";

const SoundSlider = () => {
    const { playerVolume, onPlayerVolumeChange, togglePlayerVolume } =
        usePlayerVolume();

    return (
        <Wrapper>
            <Icon name="controller_sound" onClick={togglePlayerVolume} />

            <SliderWrapper>
                <Slider
                    min={0}
                    max={1}
                    step={0.05}
                    value={playerVolume}
                    onChange={onPlayerVolumeChange}
                    railStyle={railStyle}
                    trackStyle={trackStyle}
                    handleStyle={handleStyle}
                />
            </SliderWrapper>
        </Wrapper>
    );
};

export default SoundSlider;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
`;

const SliderWrapper = styled.div`
    width: 50px;
`;

const railStyle: CSSProperties = {
    backgroundColor: "#CACACA",
};

const trackStyle: CSSProperties = {
    backgroundColor: "#424242",
};

const handleStyle: CSSProperties = {
    borderColor: "#424242",
    backgroundColor: "#424242",
};
