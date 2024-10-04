import mongoose from "mongoose";
import User from "./user.model.js";
import Message from "./message.model.js";

const conversationSchema = new mongoose.Schema({
    member:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref:User,
        }
    ],
    messages:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref:Message,
        }
    ]
}, {timestamps:true})

const Conversation = mongoose.model("conversation", conversationSchema)

export default Conversation