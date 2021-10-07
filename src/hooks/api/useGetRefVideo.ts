import useSWR from "swr";
import { fetcher } from "utils/api/fetch";

const useGetRefVideo = (rvSeq: string | null) => {
    const key = `/ref-videos/${rvSeq}`;
    const response = useSWR<IGetRefVideo>(key, fetcher);

    return response;
};

export default useGetRefVideo;

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

interface IGetRefVideo {
    ok: boolean;
    refVideo: IRefVideo;
}
