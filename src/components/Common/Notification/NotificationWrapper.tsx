import ReactDOM from "react-dom";
import styled from "styled-components";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import useNotification from "hooks/useNotification";
import Notification from "components/Common/Notification";

const NotificationWrapper = () => {
    const { notifications, removeNotification } = useNotification();

    return ReactDOM.createPortal(
        <Wrapper>
            <AnimatePresence initial={false}>
                {notifications.map((notification) => (
                    <Notification
                        key={notification.index}
                        index={notification.index}
                        title={notification.title}
                        description={notification.description}
                        autoHideDuration={notification.autoHideDuration}
                        handleClose={() => {
                            removeNotification(notification.index);
                        }}
                    />
                ))}
            </AnimatePresence>
        </Wrapper>,

        document.body
    );
};

export default NotificationWrapper;

const Wrapper = styled(motion.div)`
    position: fixed;
    top: 1.5rem;
    right: 1.5rem;
    z-index: 999;
`;