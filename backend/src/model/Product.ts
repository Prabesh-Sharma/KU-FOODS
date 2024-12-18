const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
  
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    available: {
      type: Boolean,
      default: true 
    },
    rating:{
      type:Number,
      max:5,
      min:0,
      default:0
    },
    numberOfRating:{
      type:Number,
      default:0,
    }
  }, { timestamps: true });
  
  module.exports=mongoose.model("Products",productSchema);

  
