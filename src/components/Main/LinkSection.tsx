import styled from "styled-components";
import { motion } from "framer-motion";

import LinkVideo from "./LinkVideo";

const LinkSection = () => {
    return (
        <Wrapper>
            <InputSection>
                <Title>
                    <strong>링크</strong> 입력
                </Title>
                <Dsc>원하는 YouTUbe 댄스영상 링크를 입력하세요</Dsc>
                <InputWrapper>
                    <Input />
                    <Submit>연습하기</Submit>
                </InputWrapper>
            </InputSection>
            <VideoSection>
                {/* <LinkVideo url="https://www.youtube.com/watch?v=xhztxmBJ9L4" /> */}
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

    & > strong {
        font-weight: 600;
    }
`;

const Dsc = styled(motion.span)`
    font-size: 18px;
    color: ${({ theme }) => theme.color.lightGray};
`;

const InputWrapper = styled(motion.div)`
    display: flex;
`;

const Input = styled(motion.input)`
    width: 500px;
    height: 60px;
    
    border: solid 1px black;
    background-color: ${({ theme }) => theme.color.white};
`;

const Submit = styled(motion.button)`
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.purple};
`;

const VideoSection = styled(motion.div)`
    position: relative;
    width: 400px;
`;
