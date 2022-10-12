import React from "react";

import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const NoPatients = () => {
  return (
    <View style={styles.noPatientcontainerStyle}>
      <Text>No patients found</Text>
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
});

export default NoPatients;
