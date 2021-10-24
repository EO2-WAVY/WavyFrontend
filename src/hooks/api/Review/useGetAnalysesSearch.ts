import useSWRInfinite from "swr/infinite";
import { fetcher } from "utils/api/fetch";
import { IAnalysis } from "../useGetAnalysis";

interface useGetAnalysesSearchProps {
    orderBy: string;
    query: string;
}

const useGetAnalysesSearch = ({
    orderBy,
    query,
}: useGetAnalysesSearchProps) => {
    const { data, error, size, setSize, mutate } =
        useSWRInfinite<IGetAnalysesSearch>(
            (index) =>
                `/analyses/search?page=${index + 1}&orderby=${orderBy}${
                    query !== "" && `&q=${query}`
                }`,
            fetcher
        );

    const analyses: IAnalysis[] = [];
    data?.forEach((tempData) => {
        // 삭제되지 않은 분석 영상만 보여지게
        const notDeletedAnalyses: IAnalysis[] = [];
        tempData.analyses.forEach((analysis) => {
            if (!analysis.anDeleted) notDeletedAnalyses.push(analysis);
        });
        analyses.push(...notDeletedAnalyses);
    });

    const PAGE_SIZE = data?.[0]?.totalPages;
    const isLoadingInitialData = !data && !error;
    const isEmpty = data?.[0]?.analyses.length === 0 || analyses.length === 0;
    const isReachingEnd = size >= (PAGE_SIZE as number);

    const loadMore = () => {
        if (isLoadingInitialData) return;
        if (isReachingEnd) return;
        setSize(size + 1);
    };

    return {
        analyses,
        isEmpty,
        loadMore,
        isReachingEnd,
        mutate,
        isLoadingInitialData,
    };
};

export default useGetAnalysesSearch;

interface IGetAnalysesSearch {
    ok: boolean;
    error: string;
    totalPages: number;
    totalResults: number;
    analyses: IAnalysis[];
}
