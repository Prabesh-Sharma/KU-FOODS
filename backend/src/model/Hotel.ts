const mongoose = require('mongoose');
const Location=require('./Location')

const hotelSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: false 
  }
  ,
//   type: { 
//     type: String, 
//     required: true, 
//     enum: ['restaurant', 'hotel', 'cafe', 'bar', 'others'] 
//   },

  location: {
    type:mongoose.Types.ObjectId(),
    ref:"Location"
  },
  contact: {
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
   
    }
  },
  address: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  }
}, { timestamps: true });

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
