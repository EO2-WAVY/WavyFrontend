import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useHistory } from "react-router-dom";

import Webcam from "components/Common/Dance/Webcam";
import { useRouterQuery } from "hooks/useRouterQuery";
import { defaultPageFadeInVariants } from "constants/motions";
import YoutubePlayer from "components/Common/Dance/YoutubePlayer";
import RefVideoWrapper from "components/Common/Dance/RefVideoWrapper";

const Link = () => {
    const youtubeCode = useRouterQuery("y");
    const history = useHistory();

    if (!youtubeCode) {
        history.push("/");
        return <></>;
    }

    return (
        <AnimatePresence exitBeforeEnter>
            <Wrapper
                variants={defaultPageFadeInVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <RefVideoWrapper>
                    <YoutubePlayer youtubeCode={youtubeCode} />
                </RefVideoWrapper>

                <Webcam />
            </Wrapper>
        </AnimatePresence>
    );
};

export default Link;

const Wrapper = styled(motion.main)`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
`;
