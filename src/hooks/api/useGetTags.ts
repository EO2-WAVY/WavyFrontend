import { useEffect } from "react";
import useSWR from "swr";
import { useSetRecoilState } from "recoil";
import { currentTagState } from "store/Main";
import { fetcher } from "utils/api/fetch";

const key = "/tags";

const useGetTags = () => {
    const setCurrentTag = useSetRecoilState(currentTagState);
    const response = useSWR<GetTags>(key, fetcher);

    useEffect(() => {
        if (!response.data?.tags[0]) return;

        setCurrentTag(response.data.tags[0].tagName);
    }, [response?.data, setCurrentTag]);

    return response;
};

export default useGetTags;

export interface Tag {
    createdDate: string;
    creatorSeq: string;
    updatedDate: string;
    updaterSeq: string;
    tagSeq: string;
    tagName: string;
    tagUrl: string;
}

export interface GetTags {
    ok: boolean;
    tags: Tag[];
    totalResults: number;
}
