import React from 'react'
import useConversation from '../zustand/useConversation.js'
import { useSocketContext } from '../context/SocketContext.jsx';

const User = ({ user }) => {
    const { selectedConversation, setSelectedConversation } = useConversation()
    const isSelected = selectedConversation?._id === user._id;

    const {socket, onlineUsers} = useSocketContext()
    const isOnline = onlineUsers.includes(user._id)
    return (
        // <div>
            <div className={`flex space-x-4 px-6 py-2 hover:bg-gray-700 duration-300 
                ${isSelected ? "bg-gray-700" : ""} `}
                onClick={()=>setSelectedConversation(user)}>
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className="w-14 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div>

                    <h1 className='font-semibold'>{user.fullname}</h1>
                    <span>{user.email}</span>
                </div>
            </div>
        // </div>
    )
}

export default User
