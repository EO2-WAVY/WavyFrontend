import Icon from "components/Common/Icon";
import useUserVideoPlaying from "hooks/Analysis/useUserVideoPlayingState";
import useControllerPlaying from "hooks/Dance/Controller/useControllerPlaying";

const PlayingIcon = () => {
    const { isPlaying, toggleIsPlaying } = useControllerPlaying();
    const { toggleIsUserVideoPlaying } = useUserVideoPlaying();

    const onClick = () => {
        toggleIsPlaying();
        toggleIsUserVideoPlaying();
    };

    return (
        <Icon
            name={
                isPlaying ? "controller_stop_circle" : "controller_play_circle"
            }
            onClick={onClick}
        />
    );
};

export default PlayingIcon;
