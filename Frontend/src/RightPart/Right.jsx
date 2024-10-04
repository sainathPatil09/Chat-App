import React, { useEffect } from 'react'
import ChatUser from './ChatUser.jsx'
import Messages from './Messages.jsx'
import TypeSend from './TypeSend.jsx'
import useConversation from '../zustand/useConversation.js'
import { useAuth } from '../context/AuthProvider.jsx'

const Right = () => {
  const { selectedConversation, setSelectedConversation } = useConversation()

  // useEffect(() => {
  //   return setSelectedConversation(null)
  // }, [selectedConversation])
  console.log(selectedConversation)

  return (
    <div className='bg-slate-600 w-[70%]'>
      <div>
        {!selectedConversation ? (<NoChatSelected />) : (<>
          <ChatUser />
          <div className='hide-scrollbar overflow-y-auto' style={{ maxHeight: "calc(92vh - 8vh)" }}>
            <Messages />

          </div>
          <TypeSend />

        </>)}
      </div >
    </div>
    // <>
    // <div className='bg-slate-600  w-[70%]'>
    //   <ChatUser />
    //   <div className='hide-scrollbar overflow-y-auto' style={{ maxHeight: "calc(92vh - 8vh)" }}>
    //     <Messages />

    //   </div>
    //   <TypeSend />
    // </div>

  )
}

export default Right


const NoChatSelected = () => {
  const [authUser] = useAuth()
  console.log(authUser.user.fullname)

  return (
    <>
      <div className='flex  h-screen justify-center items-center'>
        <h1 className='text-center'>Welcom <span>{authUser.user.fullname}</span>
          <br />
          No char selected, please select any chat to start conversation

        </h1>
      </div>

    </>
  )
}