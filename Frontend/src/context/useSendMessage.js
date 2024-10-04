import React, { useState } from 'react'
import useConversation from '../zustand/useConversation.js'
import axios from 'axios'

const useSendMessage = () => {
    const [loading, setLoading] = useState(false)

    const {messages, setMessages, selectedConversation} = useConversation() 

    const sendMessages=async(message)=>{
        console.log(message)
        setLoading(true)
        if(selectedConversation && selectedConversation._id ){
            try {
                const res = await axios.post(`/api/message/send/${selectedConversation._id}`, {message})
                console.log(res.data.newMessage)
                setMessages([...messages, res.data.newMessage])
                // setLoading(false)
                
                
            } catch (error) {
                console.log("Error in useSendMessage ", error)
                
            }
            finally{
                setLoading(false)

            }
        }
      }
  return {loading, sendMessages}
}

export default useSendMessage
