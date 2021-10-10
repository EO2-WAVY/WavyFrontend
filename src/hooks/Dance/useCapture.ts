import { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";

const useCapture = () => {
    const [webcamRef, setWebcamRef] = useState<Webcam | null>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
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

        mediaRecorderRef.current = new MediaRecorder(webcamRef.stream, {
            mimeType: "video/webm",
        });

        mediaRecorderRef.current.addEventListener(
            "dataavailable",
            handleDataAvailable
        );

        mediaRecorderRef.current.start();
    }, [webcamRef, mediaRecorderRef, handleDataAvailable]);

    const pauseCapture = useCallback(() => {
        mediaRecorderRef.current?.pause();
    }, []);

    const resumeCapture = useCallback(() => {
        mediaRecorderRef.current?.resume();
    }, []);

    const stopCapture = useCallback(() => {
        mediaRecorderRef.current?.stop();
    }, [mediaRecorderRef]);

    const getCaptured = useCallback(() => {
        if (!recordedChunks.length) return;
        const blob = new Blob(recordedChunks, { type: "video/webm" });

        setRecordedChunks([]);
        return blob;
    }, [recordedChunks]);

    return {
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
