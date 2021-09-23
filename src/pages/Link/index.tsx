import styled from "styled-components";

import Webcam from "components/Common/Dance/Webcam";
import { useRouterQuery } from "hooks/useRouterQuery";

const Link = () => {
    const youtubeCode = useRouterQuery("y");

    return (
        <Wrapper>
            {youtubeCode}
            <Webcam />
        </Wrapper>
    );
};

export default Link;

const Wrapper = styled.main`
    width: 100vw;
    height: 100vw;
`;
