import mongoose from 'mongoose'

const hotelSchema = new mongoose.Schema({
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  image: {
    type: String,
  },
  item: {
    type: [String, 'please provide your string'],
  },
  rating: {
    type: Number,
  },
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location',
    required: true,
  },
})

const Hotel = mongoose.model('Hotel', hotelSchema)

export default Hotel
