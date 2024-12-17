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
  console.log(`a new user with socket id: ${socket.id} has connected`)

  socket.on('order', (data) => {
    socket.broadcast.emit('onOrder', {
      orderDetails: data.orderDetails,
      consumerLocation: data.consumerLocation,
      hotelLocation: data.hotelLocation,
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
