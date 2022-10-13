import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import CustomAppbar from "../components/CustomAppbar";
import NoPatients from "../components/NoPatients";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useState } from "react";
import CustomLoader from "../components/CustomLoader";
import FabButton from "../components/FabButton";

const HomeView = ({ navigation }) => {
  const [isLoading, setisLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);

  return (
    <View>
      {isLoading ? <CustomLoader /> : <NoPatients />}

      <TouchableOpacity onPress={() => navigation.navigate("Add Patients")}>
        <FabButton />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeView;
