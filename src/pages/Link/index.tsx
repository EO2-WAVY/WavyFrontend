import styled from "styled-components";
import { AnimateSharedLayout, motion } from "framer-motion";

import Webcam from "components/Common/Dance/Webcam";
import RefVideoWrapper from "components/Common/Dance/RefVideoWrapper";
import ControllablePlayer from "components/Common/Dance/Controller/ControllablePlayer";
import Controller from "components/Common/Dance/Controller";

import { defaultPageFadeInVariants } from "constants/motions";
import { RQ_LINK_YOUTUBUE_CODE } from "constants/routerQuery";
import useRequiredRouterQuery from "hooks/Common/useRequiredRouterQuery";

const Link = () => {
    const youtubeCode = useRequiredRouterQuery(RQ_LINK_YOUTUBUE_CODE);

    return (
        <Wrapper
            variants={defaultPageFadeInVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <AnimateSharedLayout>
                <RefVideoWrapper>
                    <ControllablePlayer
                        url={`https://www.youtube.com/watch?v=${youtubeCode}`}
                    />
                </RefVideoWrapper>

                <Webcam />
            </AnimateSharedLayout>

            <Controller rvDuration="0" isLinkPractice={true} />
        </Wrapper>
    );
};

export default Link;

const Wrapper = styled(motion.main)`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
`;
