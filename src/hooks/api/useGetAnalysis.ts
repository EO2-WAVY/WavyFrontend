import { IRefVideo } from "hooks/api/useGetRefVideo";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "utils/api/fetch";

const useGetAnalysis = (anSeq: string) => {
    const [isAnalysed, setIsAnalysed] = useState<boolean>(false);

    const key = `/analyses/${anSeq}`;
    const response = useSWR<IGetAnalysis>(key, fetcher, {
        refreshInterval: isAnalysed ? 0 : 5000,
    });

    useEffect(() => {
        if (response.data?.simularityJson.analyzes) {
            setIsAnalysed(true);
        }
    }, [response.data?.simularityJson.analyzes]);

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
