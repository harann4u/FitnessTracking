import mongoose  from "mongoose";

const userScema = new mongoose.Schema({
    name : {type:String, required:true, trim:true},
    email:{type:String, required:true, unique:true, lowercase:true, trim:true},
    password:{type:String, required:true},
},{timestamps:true})

export const User = mongoose.model('User',userScema)