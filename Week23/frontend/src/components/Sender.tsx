import {useEffect, useState} from "react";


export function Sender(){
    const[socket,setSocket] = useState<null|WebSocket>(null)
    // const [pc, setPC] = useState<RTCPeerConnection | null>(null);


    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080');
        setSocket(socket)
        socket.onopen = () =>{
            socket.send(JSON.stringify({type:"sender"}))
        }


    }, []);

  async  function startingSendVideo(){

      if(!socket){
          return;
      }
      const pc = new RTCPeerConnection() ;

      pc.onicecandidate=(event)=>{

          console.log ( "ice candidates are ====>"+  event)
          if(event.candidate){
              socket?.send(JSON.stringify({type:"iceCandidate",candidate:event.candidate}));
          }
      }

      pc.onnegotiationneeded = async () =>{
          console.log("onnegotiationneeded")
          const offer = await pc.createOffer();
          await pc.setLocalDescription(offer);
          socket?.send(JSON.stringify({type:'createOffer' , sdp:pc.localDescription}));
      }

      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      stream.getTracks().forEach((track) => {
          pc.addTrack(track, stream);
      });

      // const video = document.createElement('video');
      // video.srcObject = stream;
      // video.play();
      // document.body.appendChild(video);

      socket.onmessage = async (event) => {
          const message = JSON.parse(event.data);
          if (message.type === 'createAnswer') {
              await pc.setRemoteDescription(new RTCSessionDescription(message.sdp));
          } else if (message.type === 'iceCandidate') {
              await pc.addIceCandidate(new RTCIceCandidate(message.candidate));
          }
      };


    }



    return(
        <div>
            Sender
            <button onClick={startingSendVideo}>Send Video</button>
        </div>
    )
}