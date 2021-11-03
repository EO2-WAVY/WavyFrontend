import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "components/Common/Icon";
import useControllerPlayedSecond from "hooks/Dance/Controller/useControllerPlayedSecond";
import useGetAnalysis from "hooks/api/useGetAnalysis";
import { defaultFadeInDownVariaints } from "constants/motions";
import { useEffect, useState } from "react";
import { min } from "lodash";

interface AnalysisPictogramProps {
    anSeq: string;
}

const AnalysisPictogram = ({ anSeq }: AnalysisPictogramProps) => {
    const { playedSecond } = useControllerPlayedSecond();
    const flooredPlayedSecond = Math.floor(playedSecond);
    const { data, isAnalysed } = useGetAnalysis(anSeq);

    const [isLHandWrong, setLHandWrong] = useState<boolean>(false);
    const [isRHandWrong, setRHandWrong] = useState<boolean>(false);
    const [isLLegWrong, setLLegWrong] = useState<boolean>(false);
    const [isRLegWrong, setRLegWrong] = useState<boolean>(false);

    useEffect(() => {
        const isWrong = (
            index1: number,
            index2: number,
            index3: number
        ): boolean => {
            if (!data) return false;
            if (!data.simularityJson.analyzes) return false;
            const { analyzes } = data.simularityJson;
            const { scores } = analyzes[flooredPlayedSecond]
                ? analyzes[flooredPlayedSecond]
                : { scores: [0, 0, 0] };

            const minScore = min([
                scores[index1],
                scores[index2],
                scores[index3],
            ]);

            if (!minScore || minScore < 75) {
                return true;
            }
            return false;
        };

        setLHandWrong(isWrong(5, 7, 9));
        setRHandWrong(isWrong(6, 8, 10));
        setLLegWrong(isWrong(11, 13, 15));
        setRLegWrong(isWrong(12, 14, 16));
    }, [data, flooredPlayedSecond]);

    return (
        <AnimatePresence exitBeforeEnter>
            {isAnalysed && (
                <Wrapper
                    variants={defaultFadeInDownVariaints}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <Icon name="analysis_pictogram" className="display" />
                    <Icon
                        name="analysis_lHandWrong"
                        className={isLHandWrong ? "display" : ""}
                    />
                    <Icon
                        name="analysis_rHandWrong"
                        className={isRHandWrong ? "display" : ""}
                    />
                    <Icon
                        name="analysis_lLegWrong"
                        className={isLLegWrong ? "display" : ""}
                    />
                    <Icon
                        name="analysis_rLegWrong"
                        className={isRLegWrong ? "display" : ""}
                    />
                </Wrapper>
            )}
        </AnimatePresence>
    );
};

export default AnalysisPictogram;

const Wrapper = styled(motion.div)`
    position: absolute;
    top: 12px;
    right: 12px;
    width: 80px;
    height: 80px;
    background-color: ${({ theme }) => theme.color.purple};
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 1;

    & > svg {
        position: absolute;
        height: 70%;
        opacity: 0;
        transition: opacity 0.25s;

        &.display {
            opacity: 1;
        }
    }
`;
