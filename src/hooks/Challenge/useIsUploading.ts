import { useRecoilState } from "recoil";
import { isUploadingState } from "store/Challenge";

const useIsUploading = () => {
    const [isUploading, setIsUploading] = useRecoilState(isUploadingState);

    return { isUploading, setIsUploading };
};

export default useIsUploading;
