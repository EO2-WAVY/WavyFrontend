import { useEffect, useState } from "react";
import { throttle } from "lodash";

import useSWRInfinite from "swr/infinite";
import { fetcher } from "utils/api/fetch";
import { IRefVideo } from "hooks/api/useGetRefVideo";
import useCurrentTag from "hooks/Common/useCurrentTag";

interface useGetRefVideosProps {
    query?: string;
    suspense?: boolean;
}

const useGetRefVideos = ({
    query = "",
    suspense = false,
}: useGetRefVideosProps) => {
    const { currentTag } = useCurrentTag();
    const fmCurrentTag = currentTag.replace("&", "%26");
    const { data, error, size, setSize } = useSWRInfinite<IGetRefVideos>(
        (index) =>
            query !== ""
                ? `/ref-videos/search?page=${index + 1}&query=${query}`
                : `/ref-videos?page=${index + 1}&tagName=${fmCurrentTag}`,
        fetcher,
        { suspense: suspense }
    );

    const PAGE_SIZE = data?.[0]?.totalPages;
    const isLoadingInitialData = !data && !error;
    const isLoadingMore =
        isLoadingInitialData ||
        (size > 0 && data && typeof data[size - 1] === "undefined");
    const isEmpty = data?.[0]?.refVideos.length === 0;

    const [refVideos, setRefVideos] = useState<IRefVideo[]>([]);
    const [isReachingEnd, setIsReachingEnd] = useState<boolean>(false);

    useEffect(() => {
        const updateVideos = () => {
            const tempVideos: IRefVideo[] = [];
            data?.forEach((tempData) => tempVideos.push(...tempData.refVideos));
            setRefVideos(tempVideos);
        };

        updateVideos();

        setIsReachingEnd(size >= (PAGE_SIZE as number));
    }, [data, size, currentTag, PAGE_SIZE]);

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

export default useGetRefVideos;

interface IGetRefVideos {
    ok: boolean;
    totalResult: number;
    totalPages: number;
    refVideos: IRefVideo[];
}
