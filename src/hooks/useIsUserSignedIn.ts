import { useRecoilValue } from "recoil";
import { currentUserState } from "store/Auth";

const useIsUserSignedIn = () => {
    const currentUser = useRecoilValue(currentUserState);

    const isSignedIn: boolean = currentUser !== null;
    return isSignedIn;
};

export default useIsUserSignedIn;
