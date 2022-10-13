import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
} from "react-native";
import CustomAppbar from "../components/CustomAppbar";
import NoPatients from "../components/NoPatients";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useState, useEffect } from "react";
import CustomLoader from "../components/CustomLoader";
import FabButton from "../components/FabButton";

const HomeView = ({ navigation }) => {
  const [isLoading, setisLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [data, setData] = useState([]);

  const getPatients = () => {
    setisLoading(true);
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setisLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setisLoading(false);
      });
  };

  useEffect(() => {
    getPatients();
  }, []);

  return (
    <View style={{ height: "100%" }}>
      {isLoading ? (
        <CustomLoader />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          onRefresh={() => getPatients()}
          refreshing={isLoading}
        />
      )}

      <TouchableOpacity onPress={() => navigation.navigate("Add new patient")}>
        <FabButton />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeView;
