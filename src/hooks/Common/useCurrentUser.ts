import { useRecoilState } from "recoil";
import { currentUserState } from "store/Auth";

const useCurrentUser = () => {
    const [currentUser, setCurrentUser] = useRecoilState(currentUserState);

    return { currentUser, setCurrentUser };
};

export default useCurrentUser;
