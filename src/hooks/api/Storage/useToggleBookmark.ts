import { useEffect, useState } from "react";
import useSWR from "swr";
import ReactGA from "react-ga";

import { del, post } from "utils/api/client";
import { fetcher } from "utils/api/fetch";
import { GA_CT_BOOKMARK } from "constants/gaCategory";

const useToggleBookmark = (rvSeq: string) => {
    const [isStoraged, setIsStoraged] = useState<boolean>(false);

    const key = `bookmarks/ref-videos/${rvSeq}`;
    const { data, mutate } = useSWR<IGetBookmarks>(key, fetcher);

    useEffect(() => {
        if (!data) return;
        setIsStoraged(data.isBookmarked);
    }, [data]);

    const toggleBookmark = async () => {
        if (isStoraged) {
            await del("/bookmarks", { data: { rvSeq } });
            ReactGA.event({
                category: GA_CT_BOOKMARK,
                action: `보관 해제: ${rvSeq}`,
            });
        } else {
            await post("/bookmarks", { rvSeq });
            ReactGA.event({
                category: GA_CT_BOOKMARK,
                action: `보관: ${rvSeq}`,
            });
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
