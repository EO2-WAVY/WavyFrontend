import { motion } from "framer-motion";
import styled from "styled-components";
import { useHistory } from "react-router";
import ReactGA from "react-ga";

import Icon from "components/Common/Icon";
import { gcRefVideoDifficulty } from "utils/groupCode";

import {
    cardNavUpVariants,
    defaultFadeInUpVariants,
    staggerOne,
} from "constants/motions";
import { RQ_ANALYSIS_ID } from "constants/routerQuery";
import useDeleteAnalysis from "hooks/api/Main/useDeleteAnalysis";
import { useSWRConfig } from "swr";
import useConfirm from "hooks/Common/useConfirm";
import { GA_CT_ANALYSIS } from "constants/gaCategory";

interface AnalysisCardInfoProps {
    anSeq: string;
    rvDuration: number;
    rvDifficultyCd: string;
    donwloadUrl: string;
}

const AnalysisCardInfo = ({
    anSeq,
    rvDuration,
    rvDifficultyCd,
    donwloadUrl,
}: AnalysisCardInfoProps) => {
    const history = useHistory();

    const onClickAnalysis = () => {
        ReactGA.event({
            category: GA_CT_ANALYSIS,
            action: `분석하기 진입: ${anSeq}`,
        });

        history.push(`/analysis?${RQ_ANALYSIS_ID}=${anSeq}`);
    };

    const onClickShare = () => {
        ReactGA.event({
            category: GA_CT_ANALYSIS,
            action: `분석 결과 공유: ${anSeq}`,
        });
    };

    const { deleteAnalysis } = useDeleteAnalysis(anSeq);
    const { mutate } = useSWRConfig();
    const onConfirmDelete = () => {
        ReactGA.event({
            category: GA_CT_ANALYSIS,
            action: `분석 결과 삭제: ${anSeq}`,
        });

        deleteAnalysis();
        mutate("/analyses?page=1");
    };
    const onClickDelete = useConfirm({
        message:
            "삭제한 분석 영상은 복구할 수 없습니다. 그래도 지우시겠습니까?",
        onConfirm: onConfirmDelete,
    });

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
                <NavDownload
                    href={donwloadUrl}
                    download
                    target="_blank"
                    onClick={onClickShare}
                >
                    <Icon name="common_share" />
                    <span>공유</span>
                </NavDownload>
                <NavElem onClick={onClickDelete}>
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

const NavDownload = styled(motion.a)`
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
