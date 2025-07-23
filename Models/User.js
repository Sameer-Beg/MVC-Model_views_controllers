import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    age:{type:Number},
    createdAt:{
        type:Date,
        default:Date.now,
    }
})

// export 
export const User = mongoose.model("user" , userschema)
