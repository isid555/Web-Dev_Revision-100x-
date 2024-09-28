import { useEffect, useState } from 'react'
import './App.css'

function App() {
    const [socket, setSocket] = useState<null | WebSocket>(null);
    const [message, setMessage] = useState<string|null>('');
    useEffect(() => {
        setTimeout(() => {
            console.log('3 seconds passed)')
        },3000)
        const newSocket = new WebSocket('ws://localhost:8080');
        newSocket.onopen = () => {
            console.log('Connection established');
            newSocket.send('Hello Server!');
            setSocket(newSocket);
        }
        newSocket.onmessage = (message) => {
            console.log('Message received:', message.data);
            setMessage(message.data);
        }
        setSocket(newSocket);
        return () => newSocket.close();
    }, [])

    if(!socket) {
        return <div className={"text-green-600"}>Connecting...</div>
    }

    return (
        <>

            <div>
                <h1 className={"text-blue-700"}> {message}</h1>
                <button onClick={()=>{
                socket.send('Just a sec ');
                }}>Send</button>
            </div>
        </>
    )
}

export default App