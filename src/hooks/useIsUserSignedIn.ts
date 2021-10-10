import { useRecoilValue } from "recoil";
import { currentUserState } from "store/Auth";

const useIsUserSignedIn = () => {
    const currentUser = useRecoilValue(currentUserState);

    const isUserSignedIn: boolean = currentUser !== null;
    return { isUserSignedIn, currentUser };
};

export default useIsUserSignedIn;
