import { useRecoilValue } from "recoil";
import { currentTagState } from "store/Main";
import useSWRInfinite from "swr/infinite";
import { fetcher } from "utils/api/fetch";

const useGetRefVideos = (query?: string) => {
    const currentTag = useRecoilValue(currentTagState);

    const { data, error, size, setSize } = useSWRInfinite<IGetRefVideos>(
        (index) =>
            query !== ""
                ? `/ref-videos/search?page=${index + 1}&query=${query}`
                : `/ref-videos?page=${index + 1}&tagName=${currentTag}`,
        fetcher
    );

    const refVideos: IRefVideo[] = [];
    data?.forEach((tempData) => {
        refVideos.push(...tempData.refVideos);
    });

    const PAGE_SIZE = data?.[0]?.totalPages;
    const isLoadingInitialData = !data && !error;
    const isEmpty = data?.[0]?.refVideos.length === 0;
    const isReachingEnd = size >= (PAGE_SIZE as number);

    const loadMore = () => {
        if (isReachingEnd) return;
        if (isLoadingInitialData) return;
        setSize(size + 1);
    };

    return {
        refVideos,
        isEmpty,
        loadMore,
        isReachingEnd,
    };
};

export default useGetRefVideos;

export interface IRefVideo {
    createdDate: string;
    creatorSeq: string;
    updatedDate: string;
    updaterSeq: string;
    rvSeq: string;
    rvSourceCd: string;
    rvSourceTitle: string;
    rvSourceAccountName: string;
    rvUrl: string;
    rvDuration: string;
    rvDifficultyCd: string;
    rvSongName: string;
    rvArtistName: string;
}

interface IGetRefVideos {
    ok: boolean;
    totalResult: number;
    totalPages: number;
    refVideos: IRefVideo[];
}
