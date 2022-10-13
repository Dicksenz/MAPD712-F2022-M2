import React from "react";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const DatePickerButton = ({ onPress, value }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon style={{ flex: 1 }} name="calendar" color="grey" size={25} />
        <Text style={{ ...styles.textStyle, flex: 2 }}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    height: 45,
    marginTop: 10,
    marginBottom: 15,
    borderWidth: 1,
    padding: 10,
  },
  textStyle: {
    fontSize: 16,
    color: "grey",
  },
});

export default DatePickerButton;
