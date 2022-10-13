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
import PatientCard from "../components/PatientCard";

const HomeView = ({ navigation }) => {
  const [isLoading, setisLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [data, setData] = useState([]);

  const getPatients = () => {
    setisLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
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

  let patientList = [
    {
      id: 1,
      firstname: "Dicksen",
      lastname: "Veloopillay",
      sex: "M",
      age: 27,
    },
    {
      id: 2,
      firstname: "Tina",
      lastname: "Collee",
      sex: "F",
      age: 45,
    },
    {
      id: 3,
      firstname: "Tom",
      lastname: "Tyl",
      sex: "M",
      age: 80,
    },
  ];
  return (
    <View style={{ height: "100%", padding: 10 }}>
      {isLoading ? (
        <CustomLoader />
      ) : (
        <FlatList
          data={patientList}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <PatientCard
              firstname={item.firstname}
              lastname={item.lastname}
              age={item.age}
              sex={item.sex}
            />
          )}
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
