import Controller from "components/Common/Dance/Controller";
import RefVideoWrapper from "components/Common/Dance/RefVideoWrapper";
import Webcam from "components/Common/Dance/Webcam";
import YoutubePlayer from "components/Common/Dance/YoutubePlayer";
import { AnimateSharedLayout } from "framer-motion";
import styled from "styled-components";

const Practice = () => {
    return (
        <Wrapper>
            <AnimateSharedLayout>
                <RefVideoWrapper>
                    <YoutubePlayer youtubeCode={"wGUjUztfLS8"} />
                </RefVideoWrapper>

                <Webcam />
            </AnimateSharedLayout>

            <Controller />
        </Wrapper>
    );
};

export default Practice;

const Wrapper = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
`;
