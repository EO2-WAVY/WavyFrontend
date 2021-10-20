import { IRefVideo } from "hooks/api/useGetRefVideo";
import useSWR from "swr";
import { fetcher } from "utils/api/fetch";

const useGetAnalysis = (anSeq: string) => {
    const key = `/analyses/${anSeq}`;
    const response = useSWR<IGetAnalysis>(key, fetcher);

    if (typeof response.data?.simularityJson.analyzes === "undefined") {
        setTimeout(() => response.mutate(), 1000);
    }

    return response;
};

export default useGetAnalysis;

export interface IAnalysis {
    createdDate: string;
    anSeq: string;
    anScore: null;
    anGradeCode: null;
    anUserVideoFilename: string;
    anUserVideoDuration: string;
    anUserVideoMotionDataFilename: string;
    anSimularityFilename: string;
    anDeleted: boolean;
    anStatusCode: string;
    refVideo: IRefVideo;
    mbrSeq: string;
    rvSeq: string;
}

export interface ISimularityJson {
    analyzes: {
        start_time: string;
        average_score: number;
        scores: number[];
        guides: string[][];
    }[];
    wrong_sectons: string[];
}

interface IGetAnalysis {
    ok: boolean;
    analysis: IAnalysis;
    simularityJson: ISimularityJson;
}
