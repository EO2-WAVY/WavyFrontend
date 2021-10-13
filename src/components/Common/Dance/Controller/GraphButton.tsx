import Icon from "components/Common/Icon";
import useIsGraphShowing from "hooks/Dance/Controller/useIsGraphShowing";

const GraphButton = () => {
    const { isGraphShowing, toggleIsGraphShowing } = useIsGraphShowing();

    return (
        <Icon
            name="controller_graph"
            onClick={toggleIsGraphShowing}
            className={isGraphShowing ? "checked" : ""}
        />
    );
};

export default GraphButton;
