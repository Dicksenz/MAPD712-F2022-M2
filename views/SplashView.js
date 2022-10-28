import React, { useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashView = ({ navigation }) => {
  // Check if user is already logged in
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@hasAlreadyLoggedIn");

      if (value !== null) {
        // value previously stored
        navigation.replace("Home");
      } else {
        navigation.replace("Login");
      }
    } catch (e) {
      // error reading value
      console.log(e);
      navigation.replace("Login");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
  },
});

export default SplashView;
