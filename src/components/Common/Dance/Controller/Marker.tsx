import styled from "styled-components";
import { motion } from "framer-motion";

import Icon from "components/Common/Icon";
import { IMarker } from "store/Common";
import { markerFadeInDownVariants } from "constants/motions";

interface MarkerProps extends IMarker {
    handleClose: () => void;
}
const Marker = ({ index, time, clientX, handleClose }: MarkerProps) => {
    return (
        <Wrapper
            variants={markerFadeInDownVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <Icon name="controller_active_marker" />
        </Wrapper>
    );
};

export default Marker;

const Wrapper = styled(motion.div)`
    position: absolute;
    width: 24px;
    height: 24px;
    z-index: 999;
`;
