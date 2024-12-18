const mogoose=require('mongoose')
const User=require('./User')
const Products=require('./Product')

const orderSchema=new mongoose.Schema({
    consumer:{
        required:true,
        type:mongoose.Types.ObjectId(),
        ref:"User",
        location:{
            required:true,
            type:mongoose.Types.ObjectId(),
            ref:"Location"
        }
    },
    hotelLocation:{
        required:true,
        tyep:mogoose.Types.ObjectId(),
        ref:"Hotel"
    },

    deliveryBoy:{
        required:true,
        type:mongoose.Types.ObjectId(),
        ref:"User"
    },
    items: [{
        product: {
          type: mongoose.Types.ObjectId,
          ref: 'Products', 
          required: true
        },
        quantity: {
          type: Number,
          required: true
        },
        price: {
          type: Number,
          required: true
        }
      }],
      deliveryAddress: {
        type: String,
        required: true
      },
      deliveryTime: {
        type: Date,
        required: true
      },
      deliveredAt: {
        type: Date
      }, 
      trackingStatus: {
        type: String,
        enum: ['order-received', 'processing', 'on-the-way', 'delivered'],
        default: 'order-received'
      }},{timestamps:true}
    
    )
    module.exports = mongoose.model('Order', orderSchema);
