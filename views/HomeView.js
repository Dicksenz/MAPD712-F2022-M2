import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import CustomAppbar from "../components/CustomAppbar";
import NoPatients from "../components/NoPatients";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useState } from "react";
import CustomLoader from "../components/CustomLoader";
import FabButton from "../components/FabButton";

const HomeView = () => {
  const [isLoading, setisLoading] = useState(true);
  const [isEmpty, setIsEmpty] = useState(true);

  return (
    <View>
      <CustomAppbar title="Patients" />
      {isLoading ? <CustomLoader /> : <NoPatients />}
      <FabButton />
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
  fabStyle: {
    position: "absolute",
    right: 12,
    bottom: 0,
  },
});

export default HomeView;
