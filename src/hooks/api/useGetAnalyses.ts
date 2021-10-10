import useSWRInfinite from "swr/infinite";
import { fetcher } from "utils/api/fetch";
import { IRefVideo } from "hooks/api/useGetRefVideo";

const useGetAnalyses = () => {
    const { data, error, size, setSize } = useSWRInfinite<IGetAnalyses>(
        (index) => `/analyses?page=${index + 1}`,
        fetcher,
        { suspense: true }
    );

    const analyses: IAnalysis[] = [];
    data?.forEach((tempData) => {
        console.log(tempData);
        analyses.push(...tempData.analyses);
    });
    console.log(size);

    const PAGE_SIZE = data?.[0]?.totalPages;
    const isLoadingInitialData = !data && !error;
    const isEmpty = data?.[0]?.analyses.length === 0;
    const isReachingEnd = size >= (PAGE_SIZE as number);

    const loadMore = () => {
        if (isLoadingInitialData) return;
        if (isReachingEnd) return;
        setSize(size + 1);
    };

    return { analyses, isEmpty, loadMore, isReachingEnd };
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
    error: string;
    totalPages: number;
    totalResults: number;
    analyses: IAnalysis[];
}
