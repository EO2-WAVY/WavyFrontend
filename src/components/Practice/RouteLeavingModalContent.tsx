import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { modalCenterFadeInUpVariants } from "constants/motions";

import usePostPracticeTime from "hooks/api/Practice/usePostPracticeTime";
import { useRouterQuery } from "hooks/useRouterQuery";
import useGetTodayPracticeSum from "hooks/Practice/useGetTodayPracticeSum";
import { RQ_REF_VIDEO_ID } from "constants/routerQuery";
import useIsUserSignedIn from "hooks/useIsUserSignedIn";

interface RouteLeavingModalContentProps {
    closeModal: () => void;
    handleConfirm: () => void;
}

const RouteLeavingModalContent = ({
    closeModal,
    handleConfirm,
}: RouteLeavingModalContentProps) => {
    const isUserSignedIn = useIsUserSignedIn(); // 유저 로그인 확인
    const rvSeq = useRouterQuery(RQ_REF_VIDEO_ID); // 해당 동영상 ID
    const { postPracticeTime } = usePostPracticeTime(rvSeq ? rvSeq : ""); // 춘 시간 POST
    const { getTodayPracticeSum } = useGetTodayPracticeSum(); // 오늘 총 춘 시간 GET
    const [practiceTime, setPracticeTime] = useState<string>(""); // GET한 시간 보여줄 State

    // 해당 컴포넌트가 렌더될 시가 Router Leave,
    // 그렇기 때문에 useEffect에서 POST 후 GET
    useEffect(() => {
        const calcTodayPracticeSum = async () => {
            await postPracticeTime();
            const tTime = await getTodayPracticeSum();
            setPracticeTime(tTime);
        };

        if (isUserSignedIn) calcTodayPracticeSum();
    }, [getTodayPracticeSum, isUserSignedIn, postPracticeTime]);

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
