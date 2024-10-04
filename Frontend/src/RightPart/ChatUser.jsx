import React from 'react'
import useConversation from '../zustand/useConversation'
import { useSocketContext } from '../context/SocketContext'

const ChatUser = () => {
    const {selectedConversation} = useConversation()
    const { onlineUsers} = useSocketContext()
    const getOnlineUsersStatus = (userId)=>{
        return onlineUsers.includes(userId) ? "Online" : "Offline";
    }

    return (
        <>
            <div className='flex space-x-4 justify-center p-1 h-[8vh] bg-slate-900 hover:bg-slate-700'>
                <div className="avatar">
                    <div className="w-14 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div>
                    <h1 className='font-semibold'>{selectedConversation.fullname}</h1>
                    <p className='text-sm'>{getOnlineUsersStatus(selectedConversation._id)}</p>
                </div>
            </div>
        </>
    )
}

export default ChatUser
