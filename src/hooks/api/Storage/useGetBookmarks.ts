import { throttle } from "lodash";
import { useEffect, useState } from "react";
import useSWRInfinite from "swr/infinite";
import { fetcher } from "utils/api/fetch";
import { IRefVideo } from "../useGetRefVideo";

const useGetBookmarks = () => {
    const { data, error, size, setSize } = useSWRInfinite<IGetBookmarks>(
        (index) => `/bookmarks?page=${index + 1}`,
        fetcher
    );

    const PAGE_SIZE = data?.[0]?.totalPages;
    const isLoadingInitialData = !data && !error;
    const isLoadingMore =
        isLoadingInitialData ||
        (size > 0 && data && typeof data[size - 1] === "undefined");
    const isEmpty = data?.[0]?.bookmarkedRefVideos.length === 0;

    const [refVideos, setRefVideos] = useState<IRefVideo[]>([]);
    const [isReachingEnd, setIsReachingEnd] = useState<boolean>(false);

    useEffect(() => {
        const updateVideos = () => {
            const tempVideos: IRefVideo[] = [];
            data?.forEach((tempData) =>
                tempVideos.push(...tempData.bookmarkedRefVideos)
            );
            setRefVideos(tempVideos);
        };

        updateVideos();

        setIsReachingEnd(size >= (PAGE_SIZE as number));
    }, [data, size, PAGE_SIZE]);

    const loadMore = throttle(() => {
        if (isReachingEnd) return;
        if (isLoadingInitialData) return;
        setSize((prev) => prev + 1);
    }, 1000);

    return {
        refVideos,
        isEmpty,
        loadMore,
        isReachingEnd,
        isLoadingMore,
        isLoadingInitialData,
    };
};

export default useGetBookmarks;

interface IGetBookmarks {
    ok: boolean;
    totalResults: number;
    totalPages: number;
    bookmarkedRefVideos: IRefVideo[];
}
