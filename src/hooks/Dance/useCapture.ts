import { useRef, useState, useCallback } from "react";
import Webcam, { WebcamProps } from "react-webcam";

const useCapture = () => {
    const [webcamRef, setWebcamRef] = useState<Webcam | null>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const [capturing, setCapturing] = useState<boolean>(false);
    const [recordedChunks, setRecordedChunks] = useState([]);

    const handleDataAvailable = useCallback(
        ({ data }) => {
            console.log('data avaliable');
            if (data.size > 0) {
                console.log('data avaliable trueruerue');
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

    return { setWebcamRef, startCapture, check };
};

export default useCapture;
