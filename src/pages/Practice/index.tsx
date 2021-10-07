import styled from "styled-components";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

import Controller from "components/Common/Dance/Controller";
import ControllablePlayer from "components/Common/Dance/Controller/ControllablePlayer";
import RefVideoWrapper from "components/Common/Dance/RefVideoWrapper";
import Webcam from "components/Common/Dance/Webcam";
import { useRouterQuery } from "hooks/useRouterQuery";
import { RQ_PRACTICE_REF_VIDEO_ID } from "constants/routerQuery";
import useGetRefVideo from "hooks/api/useGetRefVideo";
import { useHistory } from "react-router";
import MotionLoading from "components/Common/MotionLoading";
import { defaultPageFadeInVariants } from "constants/motions";

const Practice = () => {
    const history = useHistory();
    const rvSeq = useRouterQuery(RQ_PRACTICE_REF_VIDEO_ID);
    const { data } = useGetRefVideo(rvSeq);

    if (!rvSeq) {
        history.push("/");
        return <></>;
    }

    return (
        <AnimatePresence exitBeforeEnter>
            {data ? (
                <Wrapper
                    variants={defaultPageFadeInVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    key="player"
                >
                    <AnimateSharedLayout>
                        <RefVideoWrapper showLayoutBtn={false}>
                            <ControllablePlayer url={data.refVideo.rvUrl} />
                        </RefVideoWrapper>

                        <Webcam />
                    </AnimateSharedLayout>

                    <Controller rvDuration={data.refVideo.rvDuration} />
                </Wrapper>
            ) : (
                <MotionLoading key="motionLoading" />
            )}
        </AnimatePresence>
    );
};

export default Practice;

const Wrapper = styled(motion.main)`
    width: 100vw;
    height: 100vh;
    display: flex;
`;
