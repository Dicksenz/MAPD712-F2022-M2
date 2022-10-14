import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const FilterButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#86B1B6",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 20,
    borderColor: "#86B1B6",
    borderWidth: 1,
  },

  textStyle: {
    color: "white",
    fontSize: 17,
  },
});

export default FilterButton;
