import { motion } from "framer-motion";
import styled from "styled-components";
import { useHistory } from "react-router";

import Icon from "components/Common/Icon";
import { gcRefVideoDifficulty } from "utils/groupCode";

import {
    cardNavUpVariants,
    defaultFadeInUpVariants,
    staggerOne,
} from "constants/motions";
import { RQ_ANALYSIS_ID } from "constants/routerQuery";
import useNotification from "hooks/useNotification";

interface AnalysisCardInfoProps {
    anSeq: string;
    rvDuration: number;
    rvDifficultyCd: string;
}

const AnalysisCardInfo = ({
    anSeq,
    rvDuration,
    rvDifficultyCd,
}: AnalysisCardInfoProps) => {
    const { addNotification } = useNotification();
    const history = useHistory();

    const onClickAnalysis = () => {
        history.push(`/analysis?${RQ_ANALYSIS_ID}=${anSeq}`);
    };

    const onClickDisabled = () => {
        addNotification({
            title: "죄송합니다",
            description: "해당 기능은 아직 지원하지 않습니다 ㅠ",
        });
    };

    return (
        <Wrapper
            variants={staggerOne}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <LevelSpan variants={defaultFadeInUpVariants}>
                {gcRefVideoDifficulty(rvDifficultyCd)}
            </LevelSpan>
            <OverrallSpan variants={defaultFadeInUpVariants}>
                {rvDuration}s
            </OverrallSpan>
            <NavWrapper variants={cardNavUpVariants}>
                <NavElem onClick={onClickAnalysis}>
                    <Icon name="common_refresh" />
                    <span>분석</span>
                </NavElem>
                <NavElem onClick={onClickDisabled}>
                    <Icon name="common_share" />
                    <span>공유</span>
                </NavElem>
                <NavElem onClick={onClickDisabled}>
                    <Icon name="common_trash" />
                    <span>삭제</span>
                </NavElem>
            </NavWrapper>
        </Wrapper>
    );
};

export default AnalysisCardInfo;

const Wrapper = styled(motion.div)`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
`;

const LevelSpan = styled(motion.span)`
    position: absolute;
    bottom: 106px;
    left: 20px;

    padding: 6px 25px;
    background: rgba(194, 146, 255, 0.3);
    border: 1px solid #c292ff;
    border-radius: 32px;
    color: ${({ theme }) => theme.color.white};
    z-index: 2;
`;

const OverrallSpan = styled(motion.span)`
    position: absolute;
    bottom: 106px;
    right: 20px;

    padding: 11px;
    background: rgba(194, 146, 255, 0.3);
    border: 1px solid #c292ff;
    border-radius: 50%;
    color: ${({ theme }) => theme.color.white};
    z-index: 2;
`;

const NavWrapper = styled(motion.div)`
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 80px;
    background-color: ${({ theme }) => theme.color.purple};

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    z-index: 2;
`;

const NavElem = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: ${({ theme }) => theme.color.white};
    font-size: 14px;
    cursor: pointer;

    & > svg {
        width: 20px;
        height: 20px;
        margin-bottom: 6px;
        transition: transform 0.3s;
    }

    &:hover > svg {
        transform: scale(1.1);
    }

    &:active > svg {
        transform: scale(0.9);
    }
`;
