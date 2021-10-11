import { useState, useCallback } from "react";

const useToggle = (defaultValue: boolean) => {
    const [value, setValue] = useState<boolean>(defaultValue);
    const onToggle = useCallback(() => setValue(!value), [value]);

    const result: [boolean, VoidFunction] = [value, onToggle];
    return result;
};

export default useToggle;
