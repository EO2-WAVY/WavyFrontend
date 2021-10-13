import { useHistory } from "react-router-dom";
import useNotification from "./useNotification";
import { useRouterQuery } from "./useRouterQuery";

const useRequiredRouterQuery = (key: string) => {
    const history = useHistory();
    const queryValue = useRouterQuery(key);
    const { addNotification } = useNotification();

    if (!queryValue) {
        history.push("/");
        addNotification({ title: "잘못된 접근입니다", description: "" });
        return "";
    }

    return queryValue;
};

export default useRequiredRouterQuery;
