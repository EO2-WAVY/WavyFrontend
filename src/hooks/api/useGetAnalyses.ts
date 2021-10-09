import useSWRInfinite from "swr/infinite";
import { fetcher } from "utils/api/fetch";
import { IRefVideo } from "hooks/api/useGetRefVideo";

const useGetAnalyses = () => {
    const { data, error, size, setSize } = useSWRInfinite<IGetAnalyses>(
        (index) => `/analyses?page=${index + 1}`,
        fetcher
    );

    const analyses: IAnalysis[] = [];
    data?.forEach((tempData) => {
        analyses.push(...tempData.analyses);
    });

    const isLoadingInitialData = !data && !error;
    const isEmpty = data?.[0]?.analyses.length === 0;

    const loadMore = () => {
        if (isLoadingInitialData) return;
        setSize(size + 1);
    };

    return { analyses, isEmpty, loadMore };
};

export default useGetAnalyses;

export interface IAnalysis {
    createdDate: string;
    anSeq: string;
    anScore: null;
    anGradeCode: null;
    anUserVideoFilename: string;
    refVideo: IRefVideo;
    mbrSeq: string;
    rvSeq: string;
}

interface IGetAnalyses {
    ok: boolean;
    analyses: IAnalysis[];
}
