import styled from "styled-components";
import { AnimateSharedLayout } from "framer-motion";

import Controller from "components/Common/Dance/Controller";
import ControllablePlayer from "components/Common/Dance/Controller/ControllablePlayer";
import RefVideoWrapper from "components/Common/Dance/RefVideoWrapper";
import Webcam from "components/Common/Dance/Webcam";

// for test
const rvDuration = 27;

const Practice = () => {
    return (
        <Wrapper>
            <AnimateSharedLayout>
                <RefVideoWrapper>
                    <ControllablePlayer
                        url={"https://www.youtube.com/watch?v=_7lt0oDe_tY"}
                    />
                </RefVideoWrapper>

                <Webcam />
            </AnimateSharedLayout>

            <Controller rvDuration={rvDuration} />
        </Wrapper>
    );
};

export default Practice;

const Wrapper = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
`;
