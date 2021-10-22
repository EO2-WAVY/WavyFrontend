import { IAnalyze } from "hooks/api/useGetAnalysis";
import { cloneDeep } from "lodash";

export const fmSimularityData = (data: IAnalyze[]) => {
    const fmData = cloneDeep(data);

    fmData.forEach((analyze, index) => {
        const { average_score } = fmData[index];
        fmData[index].average_score =
            average_score > 50 ? (analyze.average_score - 50) * 2 : 0;
    });

    return fmData;
};
