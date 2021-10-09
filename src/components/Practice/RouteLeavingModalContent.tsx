import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { modalCenterFadeInUpVariants } from "constants/motions";

import usePostPracticeTime from "hooks/api/Practice/usePostPracticeTime";
import { useRouterQuery } from "hooks/useRouterQuery";
import useGetTodayPracticeSum from "hooks/Practice/useGetTodayPracticeSum";
import { RQ_REF_VIDEO_ID } from "constants/routerQuery";

interface RouteLeavingModalContentProps {
    closeModal: () => void;
    handleConfirm: () => void;
}

const RouteLeavingModalContent = ({
    closeModal,
    handleConfirm,
}: RouteLeavingModalContentProps) => {
    const rvSeq = useRouterQuery(RQ_REF_VIDEO_ID);
    const { postPracticeTime } = usePostPracticeTime(rvSeq ? rvSeq : "");
    const { getTodayPracticeSum } = useGetTodayPracticeSum();
    const [practiceTime, setPracticeTime] = useState<string>("");

    useEffect(() => {
        const calcTodayPracticeSum = async () => {
            await postPracticeTime();
            const tTime = await getTodayPracticeSum();
            setPracticeTime(tTime);
        };

        calcTodayPracticeSum();
    }, [getTodayPracticeSum, postPracticeTime]);

    return (
        <Wrapper
            key="practiceModalContent"
            variants={modalCenterFadeInUpVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            {practiceTime.slice(0, 5)}
            <button onClick={closeModal}>닫기</button>
            <button onClick={handleConfirm}>그냥나갈래</button>
        </Wrapper>
    );
};

export default RouteLeavingModalContent;

const Wrapper = styled(motion.div)`
    position: -webkit-sticky;
    position: fixed;
    top: 50%;
    left: 50%;

    width: 530px;
    height: 600px;
    max-height: 80vh;
    background-color: white;
    border-radius: 10px;
    padding: 30px 18px 30px 18px;

    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 999;
`;
