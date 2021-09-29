import styled from "styled-components";
import { motion } from "framer-motion";
import { useRecoilValue } from "recoil";

import { defaultPageFadeInVariants } from "constants/motions";
import ReadyPictogram from "./ReadyPicogram";
import ReadyProgressbar from "./ReadyProgressbar";
import { layoutState, layoutType } from "store/Dance";

interface ReadyProps {
    index?: number;
    setNextStep?: () => void;
}

const Ready = ({ index, setNextStep }: ReadyProps) => {
    const layout = useRecoilValue(layoutState);

    return (
        <Wrapper
            key={index}
            variants={defaultPageFadeInVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            layoutType={layout}
        >
            <ReadyPictogram />

            <NotiTitle layoutType={layout}>
                시작하려면 화면에 표시된{layout === "drag" && <br />} 자세를
                유지하세요
            </NotiTitle>
            <NotiDsc layoutType={layout}>
                시작한 후 중간에 멈추거나 다시 출 수 없습니다
            </NotiDsc>
            <ReadyProgressbar />
            <SkipBtn
                onClick={setNextStep}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1 }}
            >
                건너뛰기
            </SkipBtn>
        </Wrapper>
    );
};

export default Ready;

const Wrapper = styled(motion.aside)<{ layoutType: layoutType }>`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background: linear-gradient(180deg, #691ec9 17.7%, #410989 59.71%);
    color: ${({ theme }) => theme.color.white};
    padding: 2em ${({ layoutType }) => (layoutType === "drag" ? 1 : 2)}em;
    padding-bottom: 6em;
    text-align: center;
`;

const NotiTitle = styled(motion.h3)<{ layoutType: layoutType }>`
    margin-bottom: 0.25em;
`;

const NotiDsc = styled(motion.span)<{ layoutType: layoutType }>`
    opacity: 0.5;
    margin-bottom: ${({ layoutType }) => (layoutType === "drag" ? 2 : 4)}em;
`;

const SkipBtn = styled(motion.button)`
    position: absolute;
    bottom: 14px;
    left: 12px;
    background-color: ${({ theme }) => theme.color.lightPurple};
    border-radius: 40px;
    padding: 0.5em 1.25em;
`;
