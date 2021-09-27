import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import { downloadBlob } from "utils/downloadBlob";

const useCapture = () => {
    const [webcamRef, setWebcamRef] = useState<Webcam | null>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const [isCapturing, setIsCapturing] = useState<boolean>(false);
    const [recordedChunks, setRecordedChunks] = useState([]);

    const handleDataAvailable = useCallback(
        ({ data }) => {
            if (!data.size) return;
            setRecordedChunks((prev) => prev.concat(data));
        },
        [setRecordedChunks]
    );

    const startCapture = useCallback(() => {
        if (!webcamRef?.stream) return;
        setIsCapturing(true);

        mediaRecorderRef.current = new MediaRecorder(webcamRef.stream, {
            mimeType: "video/webm",
        });

        mediaRecorderRef.current.addEventListener(
            "dataavailable",
            handleDataAvailable
        );

        mediaRecorderRef.current.start();
    }, [webcamRef, setIsCapturing, mediaRecorderRef, handleDataAvailable]);

    const stopCapture = useCallback(() => {
        mediaRecorderRef.current?.stop();
        setIsCapturing(false);
    }, [mediaRecorderRef, setIsCapturing]);

    const downloadCaptured = useCallback(() => {
        if (!recordedChunks.length) return;
        const blob = new Blob(recordedChunks, { type: "video/webm" });

        downloadBlob({ blob, fileName: "TESTFILENAME" });
        setRecordedChunks([]);
    }, [recordedChunks]);

    return {
        isCapturing,
        setWebcamRef,
        startCapture,
        stopCapture,
        downloadCaptured,
    };
};

export default useCapture;
