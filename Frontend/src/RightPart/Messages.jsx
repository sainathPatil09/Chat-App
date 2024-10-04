import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessage from '../context/useGetMessage'
import Loading from '../components/Loading.jsx'
import useGetSocketMessage from '../context/useGetSocketMessage.js'

const Messages = () => {
    const {loading, messages} = useGetMessage()
    useGetSocketMessage()
    console.log("Messages:", messages); 

    const lastMsgRef = useRef(
        useEffect(() => {
          setTimeout(() => {
            lastMsgRef.current.scrollIntoView({behavior: "smooth"});
          }, 100);
        }, [messages])
        
    )
    return (
        <>
           <div className='hide-scrollbar overflow-y-auto' style={{minHeight:"calc(92vh - 8vh)"}}>
                
                {loading ? (<Loading/>) : (messages.length>0 && messages.map((message)=>( 
                    <div key={message._id} ref={lastMsgRef}>

                        <Message message={message}/>
                    </div>
                )))} 
                {!loading && messages.length === 0 && (
                    <div >
                        <p className='text-lg mt-[20%] flex items-center justify-center'>Say! hi to start conversation</p>
                    </div>
                )}
           </div>
        </>
    )
}

export default Messages
