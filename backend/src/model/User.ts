import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
        enum:["Consumer","Delivery Boy"]
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        min:0,
        max:5,
        default:0

    }},{timestamps:true}
);
const User=mongoose.model('User',userSchema)
export default User;

