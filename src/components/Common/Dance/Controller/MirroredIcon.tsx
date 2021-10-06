import Icon from "components/Common/Icon";
import useMirrored from "hooks/Dance/Controller/useMirrored";

const MirroredIcon = () => {
    const { isMirrored, toggleIsMirrored } = useMirrored();

    return (
        <Icon
            name="controller_graph"
            onClick={toggleIsMirrored}
            className={isMirrored ? "checked" : ""}
        />
    );
};

export default MirroredIcon;
