import styled from "styled-components";

import Icon from "components/Common/Icon";
import useLayout from "hooks/Dance/useLayout";

const LayoutIcon = () => {
    const { layout, toggleLayout } = useLayout();

    return (
        <Icon
            name="controller_fullscreen"
            onClick={toggleLayout}
            className={layout === "drag" ? "checked" : ""}
        />
    );
};

export default LayoutIcon;
