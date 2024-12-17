import { View, Text, Button } from "react-native";
import React from "react";

const RoleSelection = ({ navigation }) => {
  return (
    <View>
      <Text>RoleSelection Select your role</Text>
      <Button
        title="I am a consumer"
        onPress={() => navigation.navigate("Consumer")}
      />
      <Button
        title="I am a Delivery Boy"
        onPress={() => navigation.navigate("DeliveryBoy")}
      />
    </View>
  );
};

export default RoleSelection;
