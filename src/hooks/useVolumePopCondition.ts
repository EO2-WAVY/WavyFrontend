import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { volumePopPathnames } from "constants/pathCondition";

const useVolumePopCondition = () => {
    const [isConditional, setIsConditional] = useState<boolean>(false);

    const { pathname } = useLocation();

    useEffect(() => {
        setIsConditional(volumePopPathnames.includes(pathname));
    }, [pathname]);

    return { isConditional };
};

export default useVolumePopCondition;
