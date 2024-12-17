import React from "react";
import { View } from "react-native";
import MapScreen from "./screens/MapScreen";

const App = () => {
  const buyerLocation = {
    latitude: 37.78825,
    longitude: -122.4324,
  };
  const hotelLocation = {
    lattitude: 32.9834,
    longitude: -120.4323,
  };

  return (
    <View className="h-full w-full p-2 pt-8">
      <MapScreen
        userLocation={buyerLocation}
        restaurantLocation={hotelLocation}
      />
    </View>
  );
};

export default App;
