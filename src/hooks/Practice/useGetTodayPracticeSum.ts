import { get } from "utils/api/client";

const useGetTodayPracticeSum = () => {
    const getTodayPracticeSum = async () => {
        const response = await get<IGetTodayPracticeSum>(
            "/practices/today/sum",
        );

        console.log(response);
        return response.practicesTodaySum;
    };

    return { getTodayPracticeSum };
};

export default useGetTodayPracticeSum;

interface IGetTodayPracticeSum {
    ok: boolean;
    practicesTodaySum: string;
}
