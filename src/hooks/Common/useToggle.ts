import { useState, useCallback, Dispatch, SetStateAction } from "react";

const useToggle = (defaultValue: boolean) => {
    const [value, setValue] = useState<boolean>(defaultValue);
    const onToggle = useCallback(() => setValue(!value), [value]);

    const result: [boolean, VoidFunction, Dispatch<SetStateAction<boolean>>] = [
        value,
        onToggle,
        setValue,
    ];
    return result;
};

export default useToggle;
