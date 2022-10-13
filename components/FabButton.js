import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const FabButton = () => {
  return (
    <View style={styles.fabStyle}>
      <Icon name="plus" color="white" size={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  fabStyle: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    right: 12,
    bottom: 70,
    height: 70,
    width: 70,
    backgroundColor: "#347174",
    borderRadius: 100,
  },
});

export default FabButton;
