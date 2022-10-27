import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

const LoadingOverlay = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    backgroundColor: "black",
    height: "100%",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.7,
  },
});

export default LoadingOverlay;
