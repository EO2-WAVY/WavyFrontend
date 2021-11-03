import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "components/Common/Icon";
import useControllerPlayedSecond from "hooks/Dance/Controller/useControllerPlayedSecond";
import useGetAnalysis from "hooks/api/useGetAnalysis";
import { defaultFadeInDownVariaints } from "constants/motions";

interface AnalysisPictogramProps {
    anSeq: string;
}

const AnalysisPictogram = ({ anSeq }: AnalysisPictogramProps) => {
    const { playedSecond } = useControllerPlayedSecond();
    const { data, isAnalysed } = useGetAnalysis(anSeq);
    
    console.log(playedSecond);

    console.log(data?.simularityJson.analyzes[0].scores);
    return (
        <AnimatePresence exitBeforeEnter>
            {isAnalysed && (
                <Wrapper
                    variants={defaultFadeInDownVariaints}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <Icon name="analysis_pictogram" />
                    <Icon name="analysis_lHandWrong" />
                    <Icon name="analysis_rHandWrong" />
                    <Icon name="analysis_lLegWrong" />
                    <Icon name="analysis_rLegWrong" />
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
    }
`;
