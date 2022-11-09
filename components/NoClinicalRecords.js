import React from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const NoClinicalRecords = ({ onPress }) => {
  return (
    <View style={styles.noPatientcontainerStyle}>
      <TouchableOpacity onPress={onPress}>
        <Icon name="refresh" color="#347174" size={50} />
      </TouchableOpacity>
      <Text style={styles.textStyle}>No clinical records found</Text>
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

export default NoClinicalRecords;
