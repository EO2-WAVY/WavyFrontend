import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { dancePathnames } from "constants/dancePathnames";

const useNavCondition = () => {
    const [isConditional, setIsConditional] = useState<boolean>(false);

    const { pathname } = useLocation();

    useEffect(() => {
        setIsConditional(dancePathnames.includes(pathname));
    }, [pathname]);

    return { isConditional };
};

export default useNavCondition;
