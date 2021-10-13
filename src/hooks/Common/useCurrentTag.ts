import { useRecoilState } from "recoil";
import { currentTagState } from "store/Main";

const useCurrentTag = () => {
    const [currentTag, setCurrentTag] = useRecoilState(currentTagState);

    return { currentTag, setCurrentTag };
};

export default useCurrentTag;
