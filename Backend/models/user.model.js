import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname:{
        type : String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        // required:true
    }
},{timestamps:true}) //created and uptated

const User = mongoose.model("User",userSchema)

export default User;