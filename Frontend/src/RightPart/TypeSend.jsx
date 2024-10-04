import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from '../context/useSendMessage.js';

const TypeSend = () => {
    const { loading, sendMessages } = useSendMessage();
    const [message, setMessage] = useState("");

    const handleSubmit = async(e)=>{
        e.preventDefault()
        await sendMessages(message)
        setMessage("")
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='flex space-x-2 items-center h-[8vh] p-4 bg-slate-900 '>

                    <div className='w-[70%] ' >
                        <input
                            type="text"
                            placeholder="Type here"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="rounded-md px-2 py-2 w-full outline-none mt-1 border border-gray-300 " />
                    </div>
                    <button>
                        <IoSend size={30} />
                    </button>
                </div>
            </form>
        </>
    )
}

export default TypeSend
