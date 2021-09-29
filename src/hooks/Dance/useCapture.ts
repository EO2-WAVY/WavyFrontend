import { useRef, useState, useCallback, useEffect } from "react";
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
            console.log("capture data available");
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
        console.log("capture start");
    }, [webcamRef, setIsCapturing, mediaRecorderRef, handleDataAvailable]);

    const stopCapture = useCallback(() => {
        mediaRecorderRef.current?.stop();
        setIsCapturing(false);

        console.log("stop");
    }, [mediaRecorderRef, setIsCapturing]);

    const downloadCaptured = useCallback(() => {
        console.log(recordedChunks);
        if (!recordedChunks.length) return;
        const blob = new Blob(recordedChunks, { type: "video/webm" });

        console.log("download");
        downloadBlob({ blob, fileName: "TESTFILENAME" });
        setRecordedChunks([]);
    }, [recordedChunks]);

    // for ended download test
    useEffect(() => {
        if (!recordedChunks.length) return;

        downloadCaptured();
    }, [recordedChunks, downloadCaptured]);

    return {
        isCapturing,
        setWebcamRef,
        startCapture,
        stopCapture,
        downloadCaptured,
    };
};

export default useCapture;
