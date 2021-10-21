import useCurrentUser from "hooks/Common/useCurrentUser";
import useNotification from "hooks/Common/useNotification";
import { useHistory } from "react-router";
import { del } from "utils/api/client";
import removeToken from "utils/Auth/removeToken";

const useUserDropOut = () => {
    const history = useHistory();
    const { setCurrentUser } = useCurrentUser();
    const { addNotification } = useNotification();

    const userDropOut = async () => {
        const response = await del<IDelMembers>("/members");
        if (!response.ok) {
            addNotification({
                title: "탈퇴에 실패하였습니다",
                description: "지속될 시 문의 부탁드립니다",
            });
            return;
        }

        await setCurrentUser(null);
        removeToken();
        history.push("/");

        addNotification({
            title: "성공적으로 탈퇴되었습니다",
            description: "생각나면 찾아와주세요 !",
        });
    };

    return { userDropOut };
};

export default useUserDropOut;

interface IDelMembers {
    ok: boolean;
    error: string;
}
