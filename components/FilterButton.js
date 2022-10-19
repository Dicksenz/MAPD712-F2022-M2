import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const FilterButton = ({ title, onPress, selectedIndex, index }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          ...styles.container,
          backgroundColor: selectedIndex === index ? "#86B1B6" : "white",
        }}
      >
        <Text
          style={{
            ...styles.textStyle,
            color: selectedIndex === index ? "white" : "#A9A4A4",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
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
