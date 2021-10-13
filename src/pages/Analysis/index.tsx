import styled from "styled-components";
import { motion } from "framer-motion";

import useRequiredRouterQuery from "hooks/Common/useRequiredRouterQuery";
import { RQ_ANALYSIS_ID } from "constants/routerQuery";
import useGetAnalysis from "hooks/api/useGetAnalysis";

import Controller from "components/Common/Dance/Controller";
import VideoSection from "components/Analysis/VideoSection";
import { defaultPageFadeInVariants } from "constants/motions";
import GraphSection from "components/Analysis/GraphSection";

const Analysis = () => {
    const anSeq = useRequiredRouterQuery(RQ_ANALYSIS_ID);
    const { data } = useGetAnalysis(anSeq);

    if (!data) return <></>;

    return (
        <Wrapper
            variants={defaultPageFadeInVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            key="player"
        >
            <VideoSection analysis={data.analysis} />

            <GraphSection />

            <Controller
                rvDuration={data.analysis.refVideo.rvDuration}
                isAnalysis={true}
            />
        </Wrapper>
    );
};

export default Analysis;

const Wrapper = styled(motion.main)`
    width: 100vw;
    height: 100vh;
    display: flex;

    overflow: hidden;
`;
