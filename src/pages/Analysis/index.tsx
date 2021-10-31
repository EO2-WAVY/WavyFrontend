import styled from "styled-components";
import { motion } from "framer-motion";

import useRequiredRouterQuery from "hooks/Common/useRequiredRouterQuery";
import { RQ_ANALYSIS_ID } from "constants/routerQuery";
import useGetAnalysis from "hooks/api/useGetAnalysis";

import Controller from "components/Common/Dance/Controller";
import VideoSection from "components/Analysis/VideoSection";
import { defaultPageFadeInVariants } from "constants/motions";
import GraphSection from "components/Analysis/GraphSection";
import { useEffect, useState } from "react";
import useNotification from "hooks/Common/useNotification";

const Analysis = () => {
    const anSeq = useRequiredRouterQuery(RQ_ANALYSIS_ID);
    const { data } = useGetAnalysis(anSeq);

    const { addNotification } = useNotification();
    const [isNotificated, setIsNotificated] = useState<boolean>(false);

    useEffect(() => {
        if (!data) return;

        if (!data?.simularityJson.analyzes) {
            if (!isNotificated) {
                addNotification({
                    title: "아직 분석중입니다",
                    description: "분석이 끝나는대로 보여드릴게요!",
                });
                setIsNotificated(true);
            }
        }
    }, [addNotification, data, data?.simularityJson.analyzes, isNotificated]);

    if (!data) return <></>;

    console.log(data);
    return (
        <Wrapper
            variants={defaultPageFadeInVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            key="player"
        >
            <VideoSection analysis={data.analysis} />

            <GraphSection anSeq={anSeq} />

            <Controller
                rvDuration={data.analysis.refVideo.rvDuration}
                isAnalysis={true}
                wrong_sections={data.simularityJson.wrong_sections}
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
