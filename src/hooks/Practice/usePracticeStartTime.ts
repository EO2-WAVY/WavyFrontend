import { useRecoilState } from "recoil";
import { practiceStartTimeState } from "store/Practice";

const usePracticeStartTime = () => {
    const [practiceStartTime, setPracticeStartTime] = useRecoilState(
        practiceStartTimeState
    );

    const startPractice = () => {
        const date = new Date();
        setPracticeStartTime(date.toTimeString().split(" ")[0]);
    };

    return { practiceStartTime, startPractice };
};
export default usePracticeStartTime;
