import React from "react";
import { View, StyleSheet, Text } from "react-native";

const CustomButton = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    backgroundColor: "#347174",
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  titleStyle: {
    fontSize: 15,
    color: "white",
  },
});

export default CustomButton;
