import { useEffect, useState } from "react";
import useSWR from "swr";
import { del, post } from "utils/api/client";
import { fetcher } from "utils/api/fetch";

const useToggleBookmark = (rvSeq: string) => {
    const [isStoraged, setIsStoraged] = useState<boolean>(false);

    const key = `bookmarks/ref-videos/${rvSeq}`;
    const { data, mutate } = useSWR<IGetBookmarks>(key, fetcher);

    useEffect(() => {
        if (!data) return;
        setIsStoraged(data.isBookmarked);
    }, [data]);

    const toggleBookmark = async () => {
        console.log(rvSeq);
        if (isStoraged) {
            await del("/bookmarks", { data: { rvSeq } });
        } else {
            await post("/bookmarks", { rvSeq });
        }
        mutate();
    };

    return { isStoraged, toggleBookmark };
};

export default useToggleBookmark;

interface IGetBookmarks {
    ok: boolean;
    isBookmarked: boolean;
}
