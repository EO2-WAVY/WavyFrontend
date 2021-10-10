import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { modalCenterFadeInUpVariants } from "constants/motions";


import RouteLeavingModalUserSection from "./RouteLeavingModalUserSection";
import RouteLeavingModalRedirectSection from "./RouteLeavingModalRedirectSection";

import usePostPracticeTime from "hooks/api/Practice/usePostPracticeTime";
import { useRouterQuery } from "hooks/useRouterQuery";
import useGetTodayPracticeSum from "hooks/Practice/useGetTodayPracticeSum";
import useIsUserSignedIn from "hooks/useIsUserSignedIn";
import { RQ_REF_VIDEO_ID } from "constants/routerQuery";

interface RouteLeavingModalContentProps {
    closeModal: () => void;
    handleConfirm: () => void;
    setIsConfirmed: Dispatch<SetStateAction<boolean>>;
}

const RouteLeavingModalContent = ({
    closeModal,
    handleConfirm,
    setIsConfirmed,
}: RouteLeavingModalContentProps) => {
    const { isUserSignedIn } = useIsUserSignedIn(); // 유저 로그인 확인
    const rvSeq = useRouterQuery(RQ_REF_VIDEO_ID); // 해당 동영상 ID
    const { postPracticeTime } = usePostPracticeTime(rvSeq ? rvSeq : ""); // 춘 시간 POST
    const { getTodayPracticeSum } = useGetTodayPracticeSum(); // 오늘 총 춘 시간 GET
    const [practiceTime, setPracticeTime] = useState<string>(""); // GET한 시간 보여줄 State

    // 해당 컴포넌트는 Router Leave시 렌더링,
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
            <TimeDsc>
                {/* 2자리수 시간일 때 핸들링 */}
                {practiceTime.slice(1, 2)}시간 {practiceTime.slice(3, 5)}분
            </TimeDsc>

            <TimeInfo>
                오늘 <strong>연습시간</strong>
            </TimeInfo>

            <RouteLeavingModalUserSection />

            <RouteLeavingModalRedirectSection
                rvSeq={rvSeq ? rvSeq : ""}
                closeModal={closeModal}
                handleConfirm={handleConfirm}
                setIsConfirmed={setIsConfirmed}
            />
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
    padding: 50px 18px 20px 18px;

    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 999;
`;

const TimeDsc = styled(motion.p)`
    font-size: 4rem;
    font-weight: bold;
    color: ${({ theme }) => theme.color.purple};
`;

const TimeInfo = styled(motion.h1)`
    font-size: 1.25rem;
    font-weight: normal;

    > strong {
        font-weight: 500;
    }
`;
