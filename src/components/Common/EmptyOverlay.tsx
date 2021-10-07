import styled from "styled-components";

interface EmptyOverlayProps {
    handleClose: () => void;
}

const EmptyOverlay = ({ handleClose }: EmptyOverlayProps) => {
    return <Wrapper onClick={handleClose} />;
};

export default EmptyOverlay;

const Wrapper = styled.div`
    position: absolute;
    top: -100vw;
    left: -100vh;
    width: 500vw;
    height: 500vh;
`;
