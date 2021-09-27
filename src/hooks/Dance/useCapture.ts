import { useRef, useState, useCallback } from "react";
import Webcam, { WebcamProps } from "react-webcam";

const useCapture = () => {
    const [webcamRef, setWebcamRef] = useState<Webcam | null>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const [capturing, setCapturing] = useState<boolean>(false);
    const [recordedChunks, setRecordedChunks] = useState([]);

    const handleDataAvailable = useCallback(
        ({ data }) => {
            console.log("data avaliable");
            if (data.size > 0) {
                console.log("data avaliable trueruerue");
                setRecordedChunks((prev) => prev.concat(data));
            }
        },
        [setRecordedChunks]
    );

    const startCapture = useCallback(() => {
        if (!webcamRef) return;
        if (!webcamRef.stream) return;

        setCapturing(true);
        mediaRecorderRef.current = new MediaRecorder(webcamRef.stream, {
            mimeType: "video/webm",
        });

        mediaRecorderRef.current.addEventListener(
            "dataavailable",
            handleDataAvailable
        );

        mediaRecorderRef.current.start();
    }, [webcamRef, setCapturing, mediaRecorderRef, handleDataAvailable]);

    const check = () => {
        console.log(recordedChunks);
    };

    const stopCapture = useCallback(() => {
        mediaRecorderRef.current?.stop();
        setCapturing(false);
    }, [mediaRecorderRef, setCapturing]);

    const downloadCaptured = useCallback(() => {
        if (!recordedChunks.length) return;
        const blob = new Blob(recordedChunks, { type: "video/webm" });

        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.setAttribute("style", "display: none;");
        a.href = url;
        a.download = "fuck";
        a.click();
        window.URL.revokeObjectURL(url);
        setRecordedChunks([]);
        
    }, [recordedChunks]);

    return { setWebcamRef, startCapture, check, stopCapture, downloadCaptured };
};

export default useCapture;
