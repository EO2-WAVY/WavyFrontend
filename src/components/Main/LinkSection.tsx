import styled, { CSSProperties } from "styled-components";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import LinkVideo from "./LinkVideo";

const LinkSection = () => {
    return (
        <Wrapper>
            <InputSection></InputSection>
            <VideoSection>
                <LinkVideo url="https://www.youtube.com/watch?v=xhztxmBJ9L4" />
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

const VideoSection = styled(motion.div)`
    position: relative;
    width: 400px;
`;