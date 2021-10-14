import { captureMessage } from "@sentry/react";

import useIsUploading from "hooks/Challenge/useIsUploading";
import useNotification from "hooks/Common/useNotification";
import useMirrored from "hooks/Dance/Controller/useMirrored";
import { get, post } from "utils/api/client";

const usePostUploadVideo = () => {
    const { isMirrored } = useMirrored(); // Post 호출 body를 위해
    const { setIsUploading } = useIsUploading();
    const { addNotification } = useNotification();

    const uploadVideo = async ({ blob, rvSeq }: uploadVideoProps) => {
        // 녹화 영상 업로드 URL을 받아오기 위한 호출
        const data = await get<IS3UploadSignedUrl>(
            "/analysis/s3-upload-signed-url"
        );

        // XHRRequest
        const xhr = new XMLHttpRequest();
        await xhr.open("PUT", data.signedUrl);
        await xhr.send(blob);

        // Route Leaving 핸들링을 위해 set recoil state
        setIsUploading(true);

        // xhr upload 완료 시
        const handleSended = async () => {
            await post(
                "/analyses",
                {
                    rvSeq,
                    anUserVideoFilename: data.s3ObjectName,
                    mirrorEffect: isMirrored,
                },
                { timeout: 180000 }
            );
            setIsUploading(false);
        };

        xhr.addEventListener("load", handleSended);
        xhr.addEventListener("error", (event) => {
            captureMessage(`챌린지 업로드 실패 ${event}`);
            addNotification({
                title: "업로드 실패",
                description: "계속 실패할 시 운영자에게 문의 부탁드립니다F",
            });
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
