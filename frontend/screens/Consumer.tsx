import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { useSocket } from '../context/SocketContext'
import Header from '../components/consumerComponent/Header'
import FoodBody from '../components/consumerComponent/FoodBody'
import CustomHeader from '../components/consumerComponent/CustomHeader'
import Search from '../components/consumerComponent/Search'
import FoodSecondBody from '../components/consumerComponent/FoodSecondBody'
import Popular from '../components/consumerComponent/Popular'

const Consumer = () => {
  const socket = useSocket()
  const [orderDetails, setOrderDetails] = useState({
    items: ['pizza'],
    price: 250,
    quantity: 1,
  })
  const [consumerLocation, setConsumerLocation] = useState({
    coords: {
      latitude: 27.621557894076474,
      longitude: 85.53959763159864,
      altitude: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      heading: 0,
      speed: 0,
    },
    timestamp: Date.now(),
  })
  const [hotelLocation, setHotelLocation] = useState({
    coords: {
      latitude: 27.62120355017325,
      longitude: 85.53845744249,
      altitude: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      heading: 0,
      speed: 0,
    },
    timestamp: Date.now(),
  })
  const ConfirmOrder = () => {
    if (!socket) {
      console.log('socket is undefined')
      return
    }
    socket.emit('order', {
      orderDetails: orderDetails,
      consumerLocation: consumerLocation,
      hotelLocation: hotelLocation,
    })
  }
  return (
    <View>
      {/* <Text>Consumer</Text>
      <Button
        title="Confirm your Biryani Order"
        onPress={() => {
          console.log(`your order has been sent`)
          ConfirmOrder()
        }}
      /> */}
      <Header />
      <Search />
      {/* <CustomHeader /> */}
      <FoodBody />
      <Popular />
    </View>
  )
}

export default Consumer
