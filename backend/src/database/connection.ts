import mongoose from 'mongoose'

const connection = async (uri: any) => {
  try {
    await mongoose.connect(uri)
    console.log('database connected')
  } catch (err) {
    console.log(err)
  }
}

export default connection
