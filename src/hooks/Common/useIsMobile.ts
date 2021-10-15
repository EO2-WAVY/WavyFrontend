import useViewport from "./useViewport";

const useIsMobile = () => {
    const { width } = useViewport();

    const isMobile = width < 768;
    return isMobile;
};

export default useIsMobile;
