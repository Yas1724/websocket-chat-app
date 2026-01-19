import {useEffect,useState,useRef} from 'react'
import './App.css'



function App() {
  const [ messages,setMessages ] = useState(["hi there!", "hello"]);
  const wsRef = useRef();

  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080");
    ws.onmessage = (event)=>{
      setMessages(m =>[...m, event.data])
    }
    wsRef.current = ws;
  }, []);
  

  return (
    <div className='h-screen bg-black'>
      <br /><br /><br />
      <div className='h-[85vh]'>
          {messages.map(message =>(<div className='m-8'>
            <span className='bg-white text-black rounded p-4'>
               {message}
            </span>
           </div>))}
      </div>
      <div className='w-full bg-white flex flex'>
        <input className='flex-1 p-4'></input>
        <button onClick={()=>{

        }} className='bg-purple-600 text-white p-4'>
          Send message
        </button>
      </div>
     
    </div>
  )
}

export default App 
