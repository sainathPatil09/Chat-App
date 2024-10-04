import React from 'react'

const Message = ({ message }) => {
    // console.log(message.message)
    const authUser = JSON.parse(localStorage.getItem("chatUser"))
    const senderId = message.senderId;
    // console.log(authUser.user._id);
    // console.log(reciverId)  
    const itsMe = authUser.user._id === senderId
    // console.log(itsMe)
    const chatName = itsMe ? "chat-end" : "chat-start"
    const color = !itsMe ? "bg-yellow-500" : "";
    const createdAt = new Date(message.createdAt);
    const formattedTime = createdAt.toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit"
    })
    return (
        <>
            <div>

                <div className='p-4'>
                    {/* <div className="chat chat-end"> */}
                    <div className={`chat ${chatName}`}>
                        <div className={`chat-bubble chat-bubble-info text-white ${color} `}>{message.message}

                        </div>
                    <div className="chat-footer"> {formattedTime}</div>
                    </div>
                    {/* <div className="chat chat-start">
                    <div className="chat-bubble chat-bubble-success">You have been given a great honor.</div>
                    </div> */}
                </div>
            </div>

        </>
    )
}

export default Message
