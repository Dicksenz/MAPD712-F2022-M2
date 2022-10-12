import React from "react";

import { StyleSheet, Text, View } from "react-native";

const NoPatients = () => {
  return (
    <View style={styles.noPatientcontainerStyle}>
      <Text style={styles.textStyle}>No patients found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  noPatientcontainerStyle: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    height: "85%",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 20,
  },
});

export default NoPatients;
