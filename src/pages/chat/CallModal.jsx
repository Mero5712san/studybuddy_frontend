import React, { useRef, useEffect, useState } from "react";
import Draggable from "react-draggable";
import { VideoIcon } from "../../assets/VideoIcon";
import { CallEndIcon } from "../../assets/CallEndIcon";
import { MicIcon } from "../../assets/MicIcon";
import { socket } from "../../utils/socket";

export const CallModal = ({ isOpen, onClose, type, user }) => {
    const videoRef = useRef(null);
    const nodeRef = useRef(null);
    const [stream, setStream] = useState(null);
    const [micOn, setMicOn] = useState(true);
    const [camOn, setCamOn] = useState(true);

    useEffect(() => {
        if (isOpen && type === "video") startStream();
        return () => stopStream();
    }, [isOpen, type]);

    const startStream = async () => {
        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            setStream(mediaStream);
            if (videoRef.current) videoRef.current.srcObject = mediaStream;
            setCamOn(true);
            setMicOn(true);
        } catch (err) {
            console.error("Camera access error:", err);
            setCamOn(false);
        }
    };

    const stopStream = () => {
        if (videoRef.current?.srcObject) {
            videoRef.current.srcObject.getTracks().forEach(track => track.stop());
            videoRef.current.srcObject = null;
        }
        if (stream) stream.getTracks().forEach(track => track.stop());
        setStream(null);
        setMicOn(true);
        setCamOn(true);
    };

    const toggleMic = () => {
        if (!stream) return;
        stream.getAudioTracks().forEach(track => (track.enabled = !micOn));
        setMicOn(!micOn);
    };

    const toggleCam = () => {
        if (!stream) return;
        const enabled = !camOn;
        stream.getVideoTracks().forEach(track => (track.enabled = enabled));
        setCamOn(enabled);
    };

    const handleClose = () => {
        stopStream();
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <Draggable handle=".modal-header" nodeRef={nodeRef}>
                <div ref={nodeRef} className="bg-[#111827] text-white rounded-xl shadow-2xl overflow-hidden w-[600px] h-[450px]">
                    <div className="modal-header flex justify-between items-center px-4 py-2 bg-[#1F2937] cursor-move">
                        <h3 className="font-semibold text-sm">{type === "video" ? "Video Call" : "Audio Call"} with {user}</h3>
                        <button onClick={handleClose} className="text-gray-300 hover:text-red-500 text-lg">✕</button>
                    </div>

                    <div className="flex flex-col items-center justify-center h-[calc(100%-3rem)] relative">
                        {type === "video" ? (
                            <video ref={videoRef} autoPlay muted={!micOn} className={`w-full h-full object-cover ${camOn ? "block" : "hidden"}`} />
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full">
                                <div className="w-24 h-24 rounded-full bg-gray-600 flex items-center justify-center text-4xl font-bold mb-4">{user.charAt(0)}</div>
                                <p className="text-lg font-semibold mb-2">{user}</p>
                                <p className="text-sm text-gray-400">Calling...</p>
                            </div>
                        )}

                        <div className="absolute bottom-4 flex gap-6">
                            {type === "video" && (
                                <button onClick={toggleCam} className={`rounded-full p-3 ${camOn ? "bg-gray-700 hover:bg-gray-600" : "bg-red-500 opacity-50"}`}>
                                    <VideoIcon />
                                </button>
                            )}
                            <button onClick={toggleMic} className={`rounded-full p-3 ${micOn ? "bg-gray-700 hover:bg-gray-600" : "bg-red-500 opacity-50"}`}>
                                <MicIcon />
                            </button>
                            <button onClick={handleClose} className="bg-red-600 hover:bg-red-700 rounded-full p-3">
                                <CallEndIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </Draggable>
        </div>
    );
};
