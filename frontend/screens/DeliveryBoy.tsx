import React, { useEffect, useState } from "react";
import { View, Alert } from "react-native";
import MapScreen from "./MapScreen";
import io from "socket.io-client";

// Ensure the correct URL is passed here if needed, e.g. socket = io('http://localhost:3000');
const socket = io("http:\\172.18.140.188:6969");

const DeliveryBoy = () => {
  const [newOrder, setNewOrder] = useState(null);
  const [consumerLocation, setConsumerLocation] = useState(null);
  const [hotelLocation, setHotelLocation] = useState(null);

  // Listen for the new order event
  useEffect(() => {
    socket.on("onOrder", ({ itemsDetail, kinneLocation, bechneLocation }) => {
      // Show an alert to the delivery boy
      Alert.alert(
        "New Order",
        `Customer requires: ${itemsDetail.quantity} ota ${itemsDetail.items[0]}`,
        [
          { text: "Accept", onPress: () => handleOrderResponse(true) },
          { text: "Decline", onPress: () => handleOrderResponse(false) },
        ]
      );

      // Set the received locations and order details
      setConsumerLocation(kinneLocation);
      setHotelLocation(bechneLocation);
      setNewOrder(itemsDetail);
    });

    // Cleanup the socket listener when the component is unmounted
    return () => {
      socket.off("onOrder");
    };
  }, []);

  // Function to handle order response
  const handleOrderResponse = (accepted) => {
    if (accepted) {
      console.log("Order Accepted");
      socket.emit("orderAccepted", {
        order: newOrder,
        consumerLocation,
        hotelLocation,
      });
    } else {
      console.log("Order Declined");
      socket.emit("orderDeclined", { order: newOrder });
    }
  };

  // Fallback locations in case data is not available
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
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {/* Render the map screen with the locations */}
      <MapScreen
        buyerLocation={consumerLocation || defaultLocation} // Use consumer location if available, else fallback to default
        restaurantLocation={hotelLocation || defaultLocation} // Use hotel location if available, else fallback to default
      />
    </View>
  );
};

export default DeliveryBoy;
