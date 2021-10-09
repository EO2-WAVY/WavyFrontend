import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";

const useCapture = () => {
    const [webcamRef, setWebcamRef] = useState<Webcam | null>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const isCapturing = useRef<boolean>(false);
    const [recordedChunks, setRecordedChunks] = useState([]);
    const [dataIsAvailable, setDataIsAvailable] = useState<boolean>(false);

    const handleDataAvailable = useCallback(({ data }) => {
        if (!data.size) return;
        setRecordedChunks((prev) => prev.concat(data));
        setDataIsAvailable(true);
        console.log("data available!!!");
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
        console.log("start capture");
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
        console.log("stop capture");
    }, [mediaRecorderRef]);

    const getCaptured = useCallback(() => {
        if (!recordedChunks.length) return;
        const blob = new Blob(recordedChunks, { type: "video/webm" });

        setRecordedChunks([]);
        return blob;
    }, [recordedChunks]);

    return {
        isCapturing,
        setWebcamRef,
        startCapture,
        pauseCapture,
        resumeCapture,
        stopCapture,
        getCaptured,
        dataIsAvailable,
    };
};

export default useCapture;
