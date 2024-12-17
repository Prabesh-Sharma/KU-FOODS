import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import io from "socket.io-client";

const socket = io("http:\\172.18.140.188:6969");

const Consumer = () => {
  const [orderDetails, setOrderDetails] = useState({
    items: ["pizza"],
    price: 250,
    quantity: 1,
  });
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
  });
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
  });
  const ConfirmOrder = () => {
    socket.emit("order", orderDetails, consumerLocation, hotelLocation);
  };
  return (
    <View>
      <Text>Consumer</Text>
      <Button
        title="Confirm your Biryani Order"
        onPress={() => {
          console.log(`your order has been sent`);
          ConfirmOrder();
          console.log(orderDetails, consumerLocation, hotelLocation);
        }}
      />
    </View>
  );
};

export default Consumer;
