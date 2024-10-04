import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../SocketIO/server.js";

export const sendMessage = async(req, res)=>{
    // console.log("message setn", req.params.id, req.body.message)
    try {
        const {message} = req.body;
        const {id:reciverId} = req.params
        const senderId = req.user._id //current loggedin user
        // console.log(reciverId , "reciverId")
        // console.log(senderId, "senderId")

        let conversation =await Conversation.findOne({
            member:{$all:[senderId,reciverId]}
        })

        if(!conversation){
            conversation = await Conversation.create({
                member:[senderId, reciverId],
            });
        }

        const newMessage = new Message({
            senderId,
            reciverId,
            message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id)
        }

        await Promise.all([conversation.save(), newMessage.save()]); //run parallel
        const receiverSocketId =  getReceiverSocketId(reciverId);
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage", newMessage)
        }
        res.status(200).json({message : "Message sent successfully", newMessage})

    } catch (error) {
        
        console.log("Error in sendMessage", error)
        res.status(500).json({error : "Internal server error"})
    }
}



export const getMessage = async(req, res)=>{
    try {
        const {id :chatUser} = req.params
        const senderId = req.user._id
        
        let conversation =await Conversation.findOne({
            member:{$all:[senderId,chatUser]},
        }).populate("messages")
            
        if(!conversation){
           return res.status(200).json([])
        }
        const messages  = conversation.messages;
        res.status(200).json(messages)

    } catch (error) {
        console.log("Error in getMessage")
        res.status(500).json({error : "Internal server error", error})
    }
}