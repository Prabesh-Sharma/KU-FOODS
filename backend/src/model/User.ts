const mongoose=require('mongoose')
const validator=require('validator')

const userSchema= mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:[validator.isEmail,"Incorrect Email"]
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
module.exports=mongoose.model('User',userSchema)

