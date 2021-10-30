interface firstActionProps {
    handleFirst: () => void;
    handleNotFirst?: () => void;
}

const useIsFirstLS = (LS_KEY: string) => {
    const setTrue = () => {
        localStorage.setItem(LS_KEY, "true");
    };

    const firstAction = ({ handleFirst, handleNotFirst }: firstActionProps) => {
        const lsValue = localStorage.getItem(LS_KEY);
        if (!lsValue) {
            handleFirst();
            setTrue();
        } else {
            if (handleNotFirst) handleNotFirst();
        }
    };

    return firstAction;
};

export default useIsFirstLS;
