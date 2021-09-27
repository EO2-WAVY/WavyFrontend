import styled from "styled-components";
import { motion } from "framer-motion";

import LinkVideo from "./LinkVideo";
import LinkInput from "./LinkInput";
import { defaultFadeInUpVariants, staggerOne } from "constants/motions";

import Vid1 from "assets/videos/Main/vid1.mp4";
import Vid2 from "assets/videos/Main/vid2.mp4";

const LinkSection = () => {
    return (
        <Wrapper>
            <InputSection variants={staggerOne}>
                <Title variants={defaultFadeInUpVariants}>
                    <strong>링크</strong> 입력
                </Title>
                <Dsc variants={defaultFadeInUpVariants}>
                    원하는 YouTube 댄스영상 링크를 입력하세요
                </Dsc>
                <LinkInput />
            </InputSection>
            <VideoSection variants={staggerOne}>
                <LinkVideo
                    url={Vid1}
                    inputRange={[0, 1]}
                    outputRange={[0, 100]}
                />
                <LinkVideo
                    url={Vid2}
                    inputRange={[0, 1]}
                    outputRange={[100, 0]}
                    right={150}
                />
            </VideoSection>
        </Wrapper>
    );
};

export default LinkSection;

const Wrapper = styled(motion.section)`
    width: 100%;
    height: 500px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const InputSection = styled(motion.div)``;

const Title = styled(motion.h2)`
    font-size: 36px;
    font-weight: normal;
    color: ${({ theme }) => theme.color.black};
    margin-bottom: 12px;

    & > strong {
        font-weight: 600;
    }
`;

const Dsc = styled(motion.span)`
    display: inline-block;
    font-size: 18px;
    color: ${({ theme }) => theme.color.lightGray};
    margin-bottom: 40px;
`;

const VideoSection = styled(motion.div)`
    position: relative;
    width: 400px;
    height: 100%;
`;
