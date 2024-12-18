import mongoose from 'mongoose'

const locationSchema = new mongoose.Schema({
  coords: {
    accuracy: { type: Number, required: true },
    altitude: { type: Number, required: true },
    altitudeAccuracy: { type: Number, required: true },
    heading: { type: Number, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    speed: { type: Number, required: true },
  },
  mocked: { type: Boolean, required: true },
  timestamp: { type: Date, required: true },
})

module.exports= mongoose.model('Location', locationSchema)


