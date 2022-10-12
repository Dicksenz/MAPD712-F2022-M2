import React from "react";
import { View, StyleSheet, Text } from "react-native";

const CustomAppbar = ({ title }) => {
  return (
    <View style={styles.appbarContainer}>
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  appbarContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#347174",
    height: 100,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  titleStyle: {
    color: "white",
    fontSize: 20,
    marginBottom: 10,
  },
});

export default CustomAppbar;
