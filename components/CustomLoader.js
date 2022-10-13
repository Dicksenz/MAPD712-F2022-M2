import React from "react";

import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

const CustomLoader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#347174" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 20,
  },
});

export default CustomLoader;
