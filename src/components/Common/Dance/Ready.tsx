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

            <NotiSetion layoutType={layout}>
                <NotiTitle layoutType={layout}>
                    화면에 전신이 나오도록{layout === "drag" && <br />}{" "}
                    위치해주세요!
                </NotiTitle>
                <NotiDsc layoutType={layout}>
                    시작한 후 중간에 멈추거나 다시 출 수 없습니다
                </NotiDsc>
                <NotiDsc layoutType={layout}>
                    웹캠에 한 명 이상이 감지될 시 정확도가 낮아질 수 있습니다
                </NotiDsc>
            </NotiSetion>

            <ReadyProgressbar onEnded={setNextStep ? setNextStep : () => {}} />

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

const NotiSetion = styled.section<{ layoutType: layoutType }>`
    margin-bottom: ${({ layoutType }) => (layoutType === "drag" ? 1 : 4)}em;
`;

const NotiTitle = styled(motion.h3)<{ layoutType: layoutType }>`
    margin-bottom: 0.25em;
`;

const NotiDsc = styled.p<{ layoutType: layoutType }>`
    opacity: 0.5;
    font-size: ${({ layoutType }) => (layoutType === "drag" ? 0.725 : 0.8)}em;
    word-break: keep-all;
    white-space: pre-wrap;
    margin-bottom: 2px;
`;

const SkipBtn = styled(motion.button)`
    position: absolute;
    bottom: 14px;
    left: 12px;
    background-color: ${({ theme }) => theme.color.lightPurple};
    border-radius: 40px;
    padding: 0.5em 1.25em;
`;
