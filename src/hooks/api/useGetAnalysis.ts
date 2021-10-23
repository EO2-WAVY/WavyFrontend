import { IRefVideo } from "hooks/api/useGetRefVideo";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "utils/api/fetch";
import { fmSimularityData } from "utils/formatting/formattingData";

const useGetAnalysis = (anSeq: string) => {
    const [isAnalysed, setIsAnalysed] = useState<boolean>(false);
    const [isPreproced, setIsPreproced] = useState<boolean>(false);
    const [preprocedAnalyzes, setPreprocedAnalyzes] = useState<IAnalyze[]>([]);

    const key = `/analyses/${anSeq}`;
    const { data } = useSWR<IGetAnalysis>(key, fetcher, {
        refreshInterval: isAnalysed ? 0 : 5000,
    });

    useEffect(() => {
        if (data?.simularityJson.analyzes) {
            setIsAnalysed(true);

            if (!isPreproced) {
                setPreprocedAnalyzes(
                    fmSimularityData(data.simularityJson.analyzes)
                );
                setIsPreproced(true);
            }
        }
    }, [isPreproced, data?.simularityJson]);


    return { data, preprocedAnalyzes, isAnalysed };
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

export interface IAnalyze {
    start_time: string;
    average_score: number;
    scores: number[];
    guides: string[][];
}

export interface ISimularityJson {
    analyzes: IAnalyze[];
    wrong_sections: string[];
}

interface IGetAnalysis {
    ok: boolean;
    analysis: IAnalysis;
    simularityJson: ISimularityJson;
}
