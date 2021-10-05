import useControllerPlaying from "hooks/Dance/Controller/useControllerPlaying";
import ReactPlayer from "react-player";
import styled from "styled-components";

interface ControllablePlayerProps {
    url: string;
}

const ControllablePlayer = ({ url }: ControllablePlayerProps) => {
    const { isPlaying } = useControllerPlaying();

    return (
        <>
            <Overlay />
            <ReactPlayer
                url={url}
                volume={0}
                width="100%"
                height="100%"
                playing={isPlaying}
                controls={false}
            />
        </>
    );
};

export default ControllablePlayer;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9;
`;
