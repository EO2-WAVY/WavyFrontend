import useSWR from "swr";
import { fetcher } from "utils/api/fetch";

const useGetAnalysisUserVideo = (anSeq: string) => {
    const key = `/analyses/s3-download-signed-url?anSeq=${anSeq}`;
    const response = useSWR<IGetAnalysisUserVideo>(key, fetcher);

    return response;
};

export default useGetAnalysisUserVideo;

interface IGetAnalysisUserVideo {
    ok: boolean;
    signedUrl: string;
}
