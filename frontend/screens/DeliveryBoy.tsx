import React, { useEffect, useState } from 'react'
import { View, Alert } from 'react-native'
import MapScreen from './MapScreen'
import { useSocket } from '../context/SocketContext'

const DeliveryBoy = () => {
  const socket = useSocket()
  const [newOrder, setNewOrder] = useState(null)
  const [consumerLocation, setConsumerLocation] = useState(null)
  const [hotelLocation, setHotelLocation] = useState(null)

  useEffect(() => {
    if (!socket) {
      console.log('socket is undefined')
      return
    }
    socket.on(
      'onOrder',
      ({ orderDetails, consumerLocation, hotelLocation }) => {
        console.log(orderDetails, consumerLocation, hotelLocation)
        Alert.alert(
          'New Order',
          `Customer requires: ${orderDetails.quantity} ota ${orderDetails.items[0]}`,
          [
            { text: 'Accept', onPress: () => handleOrderResponse(true) },
            { text: 'Decline', onPress: () => handleOrderResponse(false) },
          ]
        )

        setConsumerLocation(consumerLocation)
        setHotelLocation(hotelLocation)
        setNewOrder(orderDetails)
      }
    )

    return () => {
      socket.off('onOrder')
    }
  }, [socket])

  const handleOrderResponse = (accepted: boolean) => {
    if (!socket) {
      console.log('socket is undefined')
      return
    }
    if (accepted) {
      console.log('Order Accepted')
      socket.emit('orderAccepted', {
        order: newOrder,
        consumerLocation,
        hotelLocation,
      })
    } else {
      console.log('Order Declined')
      socket.emit('orderDeclined', { order: newOrder })
    }
  }

  const defaultLocation = {
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
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <MapScreen
        buyerLocation={consumerLocation || defaultLocation}
        restaurantLocation={hotelLocation || defaultLocation}
      />
    </View>
  )
}

export default DeliveryBoy
