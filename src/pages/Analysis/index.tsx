import styled from "styled-components";
import { motion } from "framer-motion";

import useRequiredRouterQuery from "hooks/Common/useRequiredRouterQuery";
import { RQ_ANALYSIS_ID } from "constants/routerQuery";
import useGetAnalysis from "hooks/api/useGetAnalysis";

import Controller from "components/Common/Dance/Controller";
import VideoSection from "components/Analysis/VideoSection";

const Analysis = () => {
    const anSeq = useRequiredRouterQuery(RQ_ANALYSIS_ID);
    const { data } = useGetAnalysis(anSeq);

    if (!data) return <></>;

    return (
        <Wrapper>
            <VideoSection analysis={data.analysis} />

            <Controller rvDuration={data.analysis.refVideo.rvDuration} />
        </Wrapper>
    );
};

export default Analysis;

const Wrapper = styled(motion.main)``;

