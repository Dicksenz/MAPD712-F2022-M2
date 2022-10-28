import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LogoutButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        AsyncStorage.clear();
      }}
    >
      <Text style={{ color: "white" }}>Logout</Text>
    </TouchableOpacity>
  );
};

export default LogoutButton;
