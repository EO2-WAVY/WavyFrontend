import { useRef, useState, useCallback, useEffect } from "react";
import Webcam from "react-webcam";
import { downloadBlob } from "utils/downloadBlob";

const useCapture = () => {
    const [webcamRef, setWebcamRef] = useState<Webcam | null>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    // const [isCapturing, setIsCapturing] = useState<boolean>(false);
    const isCapturing = useRef<boolean>(false);
    const [recordedChunks, setRecordedChunks] = useState([]);

    const handleDataAvailable = useCallback(({ data }) => {
        if (!data.size) return;
        setRecordedChunks((prev) => prev.concat(data));
    }, []);

    const startCapture = useCallback(() => {
        if (!webcamRef?.stream) return;
        isCapturing.current = true;

        mediaRecorderRef.current = new MediaRecorder(webcamRef.stream, {
            mimeType: "video/webm",
        });

        mediaRecorderRef.current.addEventListener(
            "dataavailable",
            handleDataAvailable
        );

        mediaRecorderRef.current.start();
        console.log("capture start");
    }, [webcamRef, mediaRecorderRef, handleDataAvailable]);

    const pauseCapture = useCallback(() => {
        mediaRecorderRef.current?.pause();
        console.log("pause capture");
    }, []);

    const resumeCapture = useCallback(() => {
        mediaRecorderRef.current?.resume();
        console.log("resume capture");
    }, []);

    const stopCapture = useCallback(() => {
        mediaRecorderRef.current?.stop();
        isCapturing.current = false;
    }, [mediaRecorderRef]);

    const downloadCaptured = useCallback(() => {
        console.log("download");
        if (!recordedChunks.length) return;
        const blob = new Blob(recordedChunks, { type: "video/webm" });

        downloadBlob({ blob, fileName: "TESTFILENAME" });
        setRecordedChunks([]);
    }, [recordedChunks]);

    // for ended download test
    useEffect(() => {
        if (!recordedChunks.length) return;

        downloadCaptured();
    }, [downloadCaptured, recordedChunks.length]);

    return {
        isCapturing,
        setWebcamRef,
        startCapture,
        pauseCapture,
        resumeCapture,
        stopCapture,
        downloadCaptured,
    };
};

export default useCapture;
