import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

const LogoutButton = ({ navigation }) => {
  return (
    <TouchableOpacity>
      <Text style={{ color: "white" }}>Logout</Text>
    </TouchableOpacity>
  );
};

export default LogoutButton;
