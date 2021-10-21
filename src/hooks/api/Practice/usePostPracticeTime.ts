import usePracticeStartTime from "hooks/Practice/usePracticeStartTime";
import { post } from "utils/api/client";
import { fmDateToYyyyMmDdHhMmSs } from "utils/formatting/formattingDate";
import useGetRefVideo from "../useGetRefVideo";

const usePostPracticeTime = (rvSeq: string) => {
    const { data } = useGetRefVideo(rvSeq);
    const { practiceStartTime, startPractice } = usePracticeStartTime();

    const postPracticeTime = async () => {
        if (!data) return null;

        const date = new Date();
        const fmDate = fmDateToYyyyMmDdHhMmSs(date);
        await post("/practices", {
            ptStarted: practiceStartTime,
            ptFinished: fmDate,
            ptVideoTypeCode: "60002",
            ptVideoUrl: data.refVideo.rvUrl,
        });

        startPractice();
    };

    return { postPracticeTime };
};

export default usePostPracticeTime;
