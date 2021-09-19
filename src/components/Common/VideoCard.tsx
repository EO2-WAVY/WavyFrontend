import { motion } from "framer-motion";
import styled, { CSSProperties } from "styled-components";

import ReactPlayer from "react-player";

const VideoCard = () => {
    return (
        <Wrapper>
            <Overlay />
            <ReactPlayer
                url="https://www.youtube.com/watch?v=xhztxmBJ9L4"
                volume={0}
                width="100%"
                height="100%"
                style={VideoStyle}

                light={true}

                config={{
                    youtube: {
                        playerVars: { disablekb: 1 },
                    },
                }}
            />
        </Wrapper>
    );
};

export default VideoCard;

const Wrapper = styled(motion.article)`
    position: relative;
    width: 281.25px;
    height: 500px;
    border-radius: 12px;
    overflow: hidden;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
    z-index: 1;
`


const VideoStyle: CSSProperties = {
    position: "absolute",
    top: "0",
    left: "0",
};
