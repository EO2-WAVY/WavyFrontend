import styled from "styled-components";
import { motion } from "framer-motion";
import useMirrored from "hooks/Dance/Controller/useMirrored";
import Icon from "components/Common/Icon";

const MirrorPopup = () => {
    const { isMirrored, toggleIsMirrored } = useMirrored();

    return (
        <MirrorBtn onClick={toggleIsMirrored} isMirrored={isMirrored}>
            <Icon name="controller_mirror" className="icon" />
        </MirrorBtn>
    );
};

export default MirrorPopup;

const MirrorBtn = styled(motion.button)<{ isMirrored: boolean }>`
    position: fixed;
    right: 96px;
    bottom: 24px;

    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${({ theme, isMirrored }) =>
        isMirrored ? theme.color.purple : theme.color.white};
    box-shadow: ${({ theme }) => theme.shadow.over};
    transition: background-color 0.3s;

    display: flex;
    justify-content: center;
    align-items: center;

    & > .icon {
        width: 50%;
        height: 50%;

        & > * {
            transition: fill 0.3s;
            fill: ${({ theme, isMirrored }) =>
                isMirrored ? theme.color.white : theme.color.purple};
        }
    }
`;
