import { useEffect } from "react";
import useSWR from "swr";
import { useSetRecoilState } from "recoil";
import { currentTagState } from "store/Main";
import { fetcher } from "utils/api/fetch";

const key = "/tags";

const useGetTags = () => {
    const setCurrentTag = useSetRecoilState(currentTagState);
    const response = useSWR<Tag[]>(key, fetcher);
    console.log(response);

    useEffect(() => {
        if (!response.data) return;

        setCurrentTag(response.data[0].tagName);
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
