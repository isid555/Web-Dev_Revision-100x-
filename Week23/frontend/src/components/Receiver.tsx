import { useEffect, useState } from "react";

export function Receiver() {
    const [videoReady, setVideoReady] = useState(false); // Track if the video is ready to play

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080');
        const pc = new RTCPeerConnection();

        const video = document.createElement('video');
        video.muted = true;
        document.body.appendChild(video);

        pc.onicecandidate = (event) => {
            if (event.candidate) {
                socket.send(JSON.stringify({ type: "iceCandidate", candidate: event.candidate }));
            }
        };

        pc.ontrack = (event) => {
            video.srcObject = event.streams[0]; // Attach the first media stream
            setVideoReady(true); // Set video as ready when the track is received
        };

        socket.onopen = () => {
            socket.send(JSON.stringify({ type: "receiver" }));
        };

        socket.onmessage = async (event) => {
            const message = JSON.parse(event.data);
            if (message.type === 'createOffer') {
                await pc.setRemoteDescription(new RTCSessionDescription(message.sdp));
                const answer = await pc.createAnswer();
                await pc.setLocalDescription(answer);
                socket.send(JSON.stringify({ type: "createAnswer", sdp: pc.localDescription }));
            } else if (message.type === 'iceCandidate') {
                await pc.addIceCandidate(new RTCIceCandidate(message.candidate));
            }
        };

        return () => {
            pc.close();
            socket.close();
        };
    }, []);

    // Function to trigger video playback after user interaction
    const handlePlay = () => {
        const videoElement = document.querySelector('video');
        if (videoElement && videoReady) {
            videoElement.play().catch((err) => console.error("Video play error:", err));
        }
    };

    return (
        <div>
            <p>Receiver</p>
            <button onClick={handlePlay} disabled={!videoReady}>Play Video</button>
        </div>
    );
}
