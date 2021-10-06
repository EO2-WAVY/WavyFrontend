import styled from "styled-components";
import { motion } from "framer-motion";
import {
    defaultFadeInUpVariants,
    modalCenterFadeInUpVariants,
    modalOverlayVariants,
} from "constants/motions";
import ModalWrapper from "components/Common/Modal/ModalWrapper";
interface TermModalProps {
    isShowing: boolean;
    hide: VoidFunction;
    title: string;
    information: JSX.Element;
}

const TermModal = ({ isShowing, hide, title, information }: TermModalProps) => {
    return (
        <ModalWrapper isShowing={isShowing}>
            <Overlay
                onClick={hide}
                key="modalOverlay"
                variants={modalOverlayVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            />
            <ModalSection
                key="modalSection"
                variants={modalCenterFadeInUpVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <Title variants={defaultFadeInUpVariants}>{title}</Title>
                <TermArticle variants={defaultFadeInUpVariants}>
                    {information}
                </TermArticle>
                <CloseBtn
                    onClick={hide}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 1 }}
                    variants={defaultFadeInUpVariants}
                >
                    확인
                </CloseBtn>
            </ModalSection>
        </ModalWrapper>
    );
};

export default TermModal;

const Overlay = styled(motion.div)`
    position: -webkit-sticky;
    position: fixed;
    top: 0px;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.color.black};
    z-index: 998;
`;

const ModalSection = styled(motion.section)`
    position: -webkit-sticky;
    position: fixed;
    top: 50%;
    left: 50%;
    aspect-ratio: 9 / 10;
    height: 1000px;
    max-height: 80vh;
    background-color: white;
    border-radius: 10px;
    padding: 30px 36px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
`;

const Title = styled(motion.h2)``;

const TermArticle = styled(motion.article)`
    width: 100%;
    height: 80%;
    background-color: #f9f9f9;
    padding: 8px;
    overflow-y: scroll;
`;

const CloseBtn = styled(motion.button)`
    padding: 6px 30px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.lightPurple};
    align-self: flex-end;
`;
