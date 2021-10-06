import styled, { CSSProperties } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import Icon from "components/Common/Icon";
import { MouseEvent } from "react";
import { videoCardVolumeVariants } from "constants/motions";
import EmptyOverlay from "components/Common/EmptyOverlay";
import useToggle from "hooks/useToggle";
import useVideoCardVolume from "hooks/Main/useVideoCardVolume";

const VolumePop = () => {
    const [isOpen, toggleIsOpen] = useToggle(false);

    const onClickWrapper = (e: MouseEvent<HTMLDivElement>) => {
        if (isOpen && e.target !== e.currentTarget) return;
        toggleIsOpen();
    };

    const { videoCardVolume, setVideoCardVolume } = useVideoCardVolume();

    const onChangeSlider = (value: number) => {
        setVideoCardVolume(value * 0.01);
    };

    return (
        <Wrapper onClick={onClickWrapper} isOpen={isOpen}>
            {isOpen && <EmptyOverlay handleClose={toggleIsOpen} />}

            <AnimatePresence exitBeforeEnter>
                {isOpen ? (
                    <IconWrapper
                        key="sliderwrapper"
                        variants={videoCardVolumeVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <Slider
                            vertical={true}
                            onChange={onChangeSlider}
                            value={videoCardVolume * 100}
                            style={sliderStyle}
                            railStyle={railStyle}
                            trackStyle={trackStyle}
                            handleStyle={handleStyle}
                        />
                    </IconWrapper>
                ) : (
                    <IconWrapper
                        key="iconwrapper"
                        variants={videoCardVolumeVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <Icon name="main_sound" />
                    </IconWrapper>
                )}
            </AnimatePresence>
        </Wrapper>
    );
};

export default VolumePop;

const Wrapper = styled.div<{ isOpen: boolean }>`
    position: fixed;
    right: 24px;
    bottom: 24px;

    width: 60px;
    height: ${({ isOpen }) => (isOpen ? "200px" : "60px")};
    /* background-color: ${({ theme }) => theme.color.purple}; */
    background-color: ${({ theme, isOpen }) =>
        isOpen ? theme.color.white : theme.color.purple};

    border-radius: ${({ isOpen }) => (isOpen ? "24px" : "50px")};
    box-shadow: ${({ theme }) => theme.shadow.over};
    z-index: 999;
    transition: height 0.5s, border 0.5s, background 0.5s;
`;

const IconWrapper = styled(motion.div)`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    & > svg {
        position: absolute;
        width: 34px;
    }
`;

const sliderStyle: CSSProperties = {
    height: "80%",
};

const railStyle: CSSProperties = {
    backgroundColor: "#c9c9c9",
};

const trackStyle: CSSProperties = {
    // backgroundColor: "#c9c9c9",
    backgroundColor: "#882BFF",
};

const handleStyle: CSSProperties = {
    borderColor: "#882BFF",
    backgroundColor: "#882BFF",
};