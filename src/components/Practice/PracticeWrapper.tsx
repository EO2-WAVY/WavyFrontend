import { useEffect } from "react";
import styled from "styled-components";

import Controller from "components/Common/Dance/Controller";
import ControllablePlayer from "components/Common/Dance/Controller/ControllablePlayer";
import RefVideoWrapper from "components/Common/Dance/RefVideoWrapper";
import WrappedControllableWebcam from "components/Common/Dance/WrappedControllableWebcam";
import RouteLeavingModal from "components/Practice/RouteLeavingModal";
import { defaultPageFadeInVariants } from "constants/motions";
import { AnimateSharedLayout, motion } from "framer-motion";
import useGetRefVideo from "hooks/api/useGetRefVideo";
import usePracticeStartTime from "hooks/Practice/usePracticeStartTime";
import { fmToSeconds } from "utils/formatting/formattingDuration";
interface PracticeWrapperProps {
    rvSeq: string;
}

const PracticeWrapper = ({ rvSeq }: PracticeWrapperProps) => {
    const { data } = useGetRefVideo(rvSeq);
    const { startPractice } = usePracticeStartTime();

    useEffect(() => {
        startPractice();
    }, [startPractice]);

    if (!data) return null;
    return (
        <Wrapper
            variants={defaultPageFadeInVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            key="player"
        >
            <AnimateSharedLayout>
                <RefVideoWrapper showLayoutBtn={false}>
                    <ControllablePlayer
                        url={data.refVideo.rvUrl}
                        rvDuration={fmToSeconds(data.refVideo.rvDuration)}
                    />
                </RefVideoWrapper>

                <WrappedControllableWebcam />
            </AnimateSharedLayout>

            <Controller rvDuration={data.refVideo.rvDuration} />

            <RouteLeavingModal />
        </Wrapper>
    );
};

export default PracticeWrapper;

const Wrapper = styled(motion.main)`
    width: 100vw;
    height: 100vh;
    display: flex;
`;
