import { useRecoilState } from "recoil";
import { practiceStartTimeState } from "store/Practice";
import { fmDateToYyyyMmDdHhMmSs } from "utils/formatting/formattingDate";

const usePracticeStartTime = () => {
    const [practiceStartTime, setPracticeStartTime] = useRecoilState(
        practiceStartTimeState
    );

    const startPractice = () => {
        const date = new Date();
        const fmDate = fmDateToYyyyMmDdHhMmSs(date);
        setPracticeStartTime(fmDate);
    };

    return { practiceStartTime, startPractice };
};
export default usePracticeStartTime;
