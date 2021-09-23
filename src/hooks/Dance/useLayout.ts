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

    return { layout, onClickLayoutBig, onClickLayoutSmall };
};

export default useLayout;
