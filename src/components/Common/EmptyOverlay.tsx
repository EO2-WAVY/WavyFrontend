import styled from "styled-components";

interface EmptyOverlayProps {
    handleClose: () => void;
}

const EmptyOverlay = ({ handleClose }: EmptyOverlayProps) => {
    return <Wrapper onClick={handleClose} />;
};

export default EmptyOverlay;

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 200vw;
    height: 200vh;
`;
