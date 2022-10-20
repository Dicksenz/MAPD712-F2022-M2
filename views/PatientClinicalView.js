import { StyleSheet, View, TouchableOpacity, FlatList } from "react-native";

import React, { useState, useEffect } from "react";
import CustomLoader from "../components/CustomLoader";
import FabButton from "../components/FabButton";
import PatientCard from "../components/PatientCard";
import ClinicalCard from "../components/ClinicalCard";

const PatientClinicalView = ({ navigation }) => {
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

  //systolic in mm
  //diastolic in Hg
  let patientTestLists = [
    {
      id: 1,
      category: "Blood pressure",
      date: "2022-10-01",
      nurse_name: "Amanda",
      readings: {
        systolic: 120,
        diastolic: 80,
      },
    },
    {
      id: 2,
      category: "Respiratory rate",
      date: "2022-10-01",
      nurse_name: "Amanda",
      readings: {
        bpm: 12,
      },
    },
    {
      id: 3,
      category: "Blood Oxygen Level",
      date: "2022-10-01",
      nurse_name: "Amanda",
      readings: {
        percentage: 95,
      },
    },
    {
      id: 4,
      category: "Heart Beat Rate",
      date: "2022-10-01",
      nurse_name: "Amanda",
      readings: {
        bpm: 60,
      },
    },
  ];
  return (
    <View
      style={{
        height: "100%",
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingTop: 20,
      }}
    >
      {isLoading ? (
        <CustomLoader />
      ) : (
        <FlatList
          data={patientTestLists}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <ClinicalCard
              onPress={() => bottomSheet.current.show()}
              category={item.category}
              date={item.date}
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

export default PatientClinicalView;
