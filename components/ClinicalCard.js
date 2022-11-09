import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "react-native/Libraries/NewAppScreen";

const ClinicalCard = ({ category, date, readings, nurse }) => {
  return (
    <View style={styles.container}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View style={styles.nameContainer}>
          <Text style={{ ...styles.nameTextStyle, marginBottom: 10 }}>
            {category}
          </Text>

          {category === "Blood Pressure" && (
            <Text style={{ ...styles.subtitleStyle, marginBottom: 10 }}>
              Blood pressure value: {readings.systolic} / {readings.diastolic}{" "}
              mmHg
            </Text>
          )}
          {category === "Respiratory rate" && (
            <Text style={{ ...styles.subtitleStyle, marginBottom: 10 }}>
              Respiratory Rate value: {readings.bpm} BPM
            </Text>
          )}
          {category === "Blood Oxygen Level" && (
            <Text style={{ ...styles.subtitleStyle, marginBottom: 10 }}>
              Blood Oxygen level: {readings.percentage} %
            </Text>
          )}
          {category === "Heart Beat Rate" && (
            <Text style={{ ...styles.subtitleStyle, marginBottom: 10 }}>
              Heart Beat Rate value: {readings.bpm} BPM
            </Text>
          )}

          <Text style={{ ...styles.subtitleStyle, marginBottom: 10 }}>
            Taken by nurse: {nurse}
          </Text>
          <Text style={{ ...styles.subtitleStyle, marginBottom: 10 }}>
            Date tested: {date}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 15,
  },
  nameContainer: {
    display: "flex",
    flexDirection: "column",
  },
  nameTextStyle: {
    color: "#C4CD4A",
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitleStyle: {
    color: "#616161",
    fontSize: 18,
  },

  avatar: {
    backgroundColor: "#F9F9F9",

    borderColor: "",
    padding: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  arrowCircle: {
    backgroundColor: "#347174",
    height: 30,
    width: 30,
    borderRadius: 50,
  },
});

export default ClinicalCard;
