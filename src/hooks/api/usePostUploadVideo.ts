import useMirrored from "hooks/Dance/Controller/useMirrored";
import { get, post } from "utils/api/client";

const usePostUploadVideo = () => {
    const { isMirrored } = useMirrored();

    const uploadVideo = async ({ blob, rvSeq }: uploadVideoProps) => {
        const data = await get<IS3UploadSignedUrl>(
            "/analysis/s3-upload-signed-url"
        );

        const xhr = new XMLHttpRequest();
        await xhr.open("PUT", data.signedUrl);
        await xhr.send(blob);
        console.log("업로드 중입니다", blob);

        const handleSended = async () => {
            const response = await post(
                "/analyses",
                {
                    rvSeq,
                    anUserVideoFilename: data.s3ObjectName,
                    mirrorEffect: isMirrored,
                },
                { timeout: 180000 }
            );

            console.log("업로드", response);
        };

        xhr.addEventListener("load", handleSended);
        xhr.addEventListener("error", (event) => {
            console.log("동영상 업로드 오류입니다");
            console.log(event);
        });
    };

    return { uploadVideo };
};

export default usePostUploadVideo;

interface uploadVideoProps {
    blob: Blob;
    rvSeq: string;
}

interface IS3UploadSignedUrl {
    ok: boolean;
    signedUrl: string;
    s3ObjectName: string;
}
