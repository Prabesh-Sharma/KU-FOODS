import React from "react";
import { View } from "react-native";
import MapScreen from "./screens/MapScreen";

const App = () => {
  const buyerLocation = {
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
  const hotelLocation = {
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
  };

  return (
    <View className="h-full w-full p-2 pt-8">
      <MapScreen
        buyerLocation={buyerLocation}
        restaurantLocation={hotelLocation}
      />
    </View>
  );
};

export default App;
