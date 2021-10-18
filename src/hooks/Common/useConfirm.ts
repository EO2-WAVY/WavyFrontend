interface useConfirmProps {
    message?: string;
    onConfirm: () => void;
    onCancel?: () => void;
}

const useConfirm = ({
    message = "",
    onConfirm,
    onCancel = () => {},
}: useConfirmProps) => {
    const confirmAction = () => {
        if (window.confirm(message)) {
            onConfirm();
        } else {
            onCancel();
        }
    };

    return confirmAction;
};

export default useConfirm;
