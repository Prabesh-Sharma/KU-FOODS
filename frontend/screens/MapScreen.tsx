import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Button,
  Dimensions,
} from "react-native";
import MapView from "react-native-maps";
import * as Location from "expo-location";

const MapScreen = () => {
  const { height, width } = Dimensions.get("window");
  const [deliveryBoyLocation, setDeliveryBoyLocation] =
    useState<Location.LocationObject | null>(null);
  const [errors, setErrros] = useState<string | null>(null);

  useEffect(() => {
    const accessLocationPermission = async () => {
      // Request permission explicitly
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrros("Permission to accesss location was denied");
        console.log("Permission denied");
        return;
      }
      try {
        const myLocation = await Location.getCurrentPositionAsync();
        console.log(myLocation);
        setDeliveryBoyLocation(myLocation);
      } catch (error) {
        setErrros("Error fetching location");
        console.error(error);
      }
    };

    accessLocationPermission();
  }, []);

  if (!deliveryBoyLocation) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Fetching location...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          position: "absolute",
          bottom: 0.1 * height,
          width: width * 0.8,
          zIndex: 1000,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button title="Go online!" />
      </View>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: deliveryBoyLocation?.coords.latitude || 27.6193268,
          longitude: deliveryBoyLocation?.coords.longitude || 85.5387575,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        zoomEnabled={true}
        showsUserLocation={true}
        showsMyLocationButton={true}
        provider="google"
      />
    </View>
  );
};

export default MapScreen;
