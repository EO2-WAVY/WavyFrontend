import { useRecoilState } from "recoil";
import { layoutState } from "store/Dance";

const useLayout = () => {
    const [layout, setLayout] = useRecoilState(layoutState);

    const onClickLayoutBig = () => {
        setLayout("drag");
    };

    const onClickLayoutSmall = () => {
        setLayout("half");
    };

    const toggleLayout = () => {
        setLayout((prev) => (prev === "drag" ? "half" : "drag"));
    };

    return { layout, onClickLayoutBig, onClickLayoutSmall, toggleLayout };
};

export default useLayout;
