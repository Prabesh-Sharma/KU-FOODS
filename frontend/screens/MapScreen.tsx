import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Button,
  Dimensions,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import io from "socket.io-client";

const socket = io();

const MapScreen = ({
  restaurantLocation,
  buyerLocation,
}: {
  restaurantLocation: Location.LocationObject;
  buyerLocation: Location.LocationObject;
}) => {
  const { height, width } = Dimensions.get("window");
  const [deliveryBoyLocation, setDeliveryBoyLocation] =
    useState<Location.LocationObject | null>(null);
  const [errors, setErrros] = useState<string | null>(null);
  const [online, setOnline] = useState(false);
  // const handleOnline = () => {
  //   socket.on()
  //   setOnline(true);
  //   console.log(`Delivery Boy is ${online ? " " : "not "} online`);
  // };

  useEffect(() => {
    const accessLocationPermission = async () => {
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
      {/* {online && (
        <View
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            display: "flex",
            flexDirection: "row", // Align items horizontally
            alignItems: "center", // Center items vertically
            zIndex: 10, // Ensure it appears above the map
          }}
        >
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 10, // Make it a perfect circle
              backgroundColor: "green",
            }}
          />

          <Text style={{ marginLeft: 10, fontSize: 16, color: "black" }}>
            Online
          </Text>
        </View>
      )} */}

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
        {/* <Button title="Go online!" onPress={handleOnline} /> */}
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
      >
        <Marker
          key={"RestaurantLocation"}
          coordinate={restaurantLocation.coords}
        />
        <Marker key={"BuyerLocation"} coordinate={buyerLocation.coords} />
      </MapView>
    </View>
  );
};

export default MapScreen;
