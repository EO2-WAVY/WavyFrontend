import Icon from "components/Common/Icon";
import useControllerPlaying from "hooks/Dance/Controller/useControllerPlaying";

const PlayingIcon = () => {
    const { isPlaying, toggleIsPlaying } = useControllerPlaying();

    return (
        <Icon
            name={
                isPlaying ? "controller_stop_circle" : "controller_play_circle"
            }
            onClick={toggleIsPlaying}
        />
    );
};

export default PlayingIcon;
