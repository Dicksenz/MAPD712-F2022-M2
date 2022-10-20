import React from "react";

import { StyleSheet, Text, View } from "react-native";

const NoClinicalTests = () => {
  return (
    <View style={styles.noPatientcontainerStyle}>
      <Text style={styles.textStyle}>No clinical tests found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  noPatientcontainerStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  textStyle: {
    fontSize: 20,
  },
});

export default NoClinicalTests;
