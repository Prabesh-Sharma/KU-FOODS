import express, { Express, Request, Response } from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import { config } from 'dotenv'
import connection from './database/connection'

config()

const app: Express = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
})

connection(process.env.URI)
io.on('connect', (socket) => {
  console.log(`a new usfasefdsr witfsafsdh socket id: ${socket.id} has connected`)

  socket.on('order', ({orderDetails,consumerLocation,hotelLocation}) => {
    console.log("received order")
    console.log(orderDetails)
    console.log(consumerLocation)
    console.log(hotelLocation)
    socket.broadcast.emit('onOrder', {

      orderDetails: orderDetails,
      consumerLocation: consumerLocation,
      hotelLocation: hotelLocation,
    })
  })
})

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'hello from ts!!! & nodemon',
  })
})

httpServer.listen(6969, '0.0.0.0', () => {
  console.log('server started on port 6969')
})
