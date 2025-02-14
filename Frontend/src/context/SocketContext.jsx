import React, {createContext, useContext, useEffect, useState} from 'react'
import io from 'socket.io-client'
import { useAuth } from './AuthProvider'
const socketContext = createContext()

export const useSocketContext=()=>{
    return useContext(socketContext)
}


export const SocketProvider = ({children})=>{
    const[socket, setSocket] = useState()
    const[authUser] = useAuth()
    const [onlineUsers, setOnlineUsers] = useState([])

    useEffect(() => {
      if(authUser){
        const socket = io("http://localhost:3000",{ // backend uri
            query:{
                userId : authUser.user._id
            },
        });
        setSocket(socket);
        socket.on("getOnlineUsers", (users)=>{
            setOnlineUsers(users)
        })
        return()=> socket.close()
      }
      else{
        if(socket){
            socket.close()
            setSocket(null);
        }
      }
    }, [authUser]);
    return (
        <socketContext.Provider value={{socket, onlineUsers}}>
            {children}
        </socketContext.Provider>
    )
    
}