import { motion } from "framer-motion";
import styled from "styled-components";
import Confetti from "react-confetti";

import ModalWrapper from "components/Common/Modal/ModalWrapper";
import ModalOverlay from "components/Common/Modal/ModalOverlay";
import { modalCenterFadeInUpVariants } from "constants/motions";
import useViewport from "hooks/Common/useViewport";
import ModalImageWrapper from "./ModalImageWrapper";
import { useHistory } from "react-router";
interface EndedModalProps {
    isEnded: boolean;
}

const EndedModal = ({ isEnded }: EndedModalProps) => {
    const { width, height } = useViewport();
    const history = useHistory();

    const onClickReview = () => {
        history.push("/review");
    };

    const onClickMain = () => {
        history.push("/");
    };

    return (
        <ModalWrapper isShowing={isEnded}>
            <Confetti width={width} height={height} key="confetti" />
            <ModalOverlay key="modalOverlay" handleClose={() => {}} />
            <ModalSection
                key="modalSection"
                variants={modalCenterFadeInUpVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <ModalImageWrapper />

                <Dsc>와 너무 잘 추셨는데요 !</Dsc>
                <Dsc>분석 결과를 통해 부족한 부분을 메꿔봐요</Dsc>

                <ResultBtn onClick={onClickReview}>결과보기</ResultBtn>
                <MainBtn onClick={onClickMain}>메인으로</MainBtn>
            </ModalSection>
        </ModalWrapper>
    );
};

export default EndedModal;

const ModalSection = styled(motion.section)`
    position: -webkit-sticky;
    position: fixed;
    top: 50%;
    left: 50%;

    width: 530px;
    height: 600px;
    max-height: 80vh;
    background-color: white;
    border-radius: 10px;
    padding: 80px 18px 30px 18px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    z-index: 999;
`;

const Dsc = styled.span`
    font-size: 1.25rem;
    color: ${({ theme }) => theme.color.black};
    line-height: 2.25rem;
`;

const Btn = styled.button`
    font-size: 1.25rem;
    padding: 15px 62px;
    border-radius: 100px;
`;

const ResultBtn = styled(Btn)`
    background-color: ${({ theme }) => theme.color.lightPurple};
    color: ${({ theme }) => theme.color.white};
    margin-top: 30px;
`;

const MainBtn = styled(Btn)`
    color: ${({ theme }) => theme.color.gray};
`;
