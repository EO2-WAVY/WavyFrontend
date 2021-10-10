import { Dispatch, SetStateAction } from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useHistory } from "react-router";

import { RQ_REF_VIDEO_ID } from "constants/routerQuery";
import useCountdown from "hooks/useCountdown";

interface RouteLeavingModalRedirectSectionProps {
    rvSeq: string;
    closeModal: () => void;
    handleConfirm: () => void;
    setIsConfirmed: Dispatch<SetStateAction<boolean>>;
}

const RouteLeavingModalRedirectSection = ({
    rvSeq,
    closeModal,
    handleConfirm,
    setIsConfirmed,
}: RouteLeavingModalRedirectSectionProps) => {
    const history = useHistory();

    const onClickChallenge = () => {
        setIsConfirmed(true);
        history.push(`/challenge?${RQ_REF_VIDEO_ID}=${rvSeq}`);
    };

    const { remainTime } = useCountdown({ endTime: 10, onEnd: handleConfirm });

    return (
        <>
            <BtnWrapper>
                <ReStartBtn onClick={closeModal}>다시 연습하기</ReStartBtn>
                <ChallengeBtn onClick={onClickChallenge}>도전하기</ChallengeBtn>
            </BtnWrapper>
            <RedirectDsc>
                응답이 없을 경우 {remainTime}초후에 나가집니다
            </RedirectDsc>
            <MainBtn onClick={handleConfirm}>나가기</MainBtn>
        </>
    );
};

export default RouteLeavingModalRedirectSection;

const BtnWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
`;

const DefaultButton = styled(motion.button)`
    width: 200px;
    height: 56px;
    border-radius: 100px;
    text-align: center;
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 16px;
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.05);
    }
    &:active {
        transform: scale(1);
    }
`;

const ReStartBtn = styled(DefaultButton)`
    border: 3px solid ${({ theme }) => theme.color.purple};
    color: ${({ theme }) => theme.color.purple};
`;

const ChallengeBtn = styled(DefaultButton)`
    background-color: ${({ theme }) => theme.color.purple};
    color: ${({ theme }) => theme.color.white};
`;

const RedirectDsc = styled.p`
    color: ${({ theme }) => theme.color.gray};
`;

const MainBtn = styled(motion.button)`
    font-size: 1.25rem;
    color: ${({ theme }) => theme.color.lightGray};
    margin-top: auto;
    transition: color 0.3s;

    &:hover {
        color: ${({ theme }) => theme.color.black};
    }
`;
