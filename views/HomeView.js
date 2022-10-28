import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import CustomAppbar from "../components/CustomAppbar";
import NoPatients from "../components/NoPatients";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useState, useEffect } from "react";
import CustomLoader from "../components/CustomLoader";
import FabButton from "../components/FabButton";
import PatientCard from "../components/PatientCard";
import FilterButton from "../components/FilterButton";
import BottomSheet from "react-native-gesture-bottom-sheet";
import ModalCard from "../components/ModalCard";
import CriticalConditionCard from "../components/CriticalConditionCard";

const HomeView = ({ navigation }) => {
  const [isLoading, setisLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [data, setData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(0);
  const [selectedName, setSelectedName] = useState("");
  const [selectedPatientId, setSelectedPatientId] = useState("");

  const bottomSheet = React.useRef();

  // This is a dummy list
  let criticalConditionList = [
    {
      _id: 1,
      firstname: "Dicksen",
      lastname: "Veloopillay",
      sex: "M",
      age: 27,
      conditions: ["Blood pressure low"],
    },
    {
      _id: 2,
      firstname: "Tina",
      lastname: "Collee",
      sex: "F",
      age: 45,
      conditions: ["Blood pressure low"],
    },
    {
      _id: 3,
      firstname: "Tom",
      lastname: "Tyl",
      sex: "M",
      age: 80,
      conditions: ["Blood pressure high"],
    },
  ];

  // Webservice API to get all patients
  // This API was created in the other module Enterpricse Tech milestone 2
  const getPatients = () => {
    setData([]);
    setisLoading(true);
    fetch("https://smarthealth2.herokuapp.com/patients")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        // setData(patientList);
        setisLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setisLoading(false);
      });
  };

  // This is a placeholder API call.
  // This will be replaced with another API in other milestones.
  const getPatientsWithCriticalConditions = () => {
    setData([]);
    setisLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        // setData(json);
        setData(criticalConditionList);
        setisLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setisLoading(false);
      });
  };

  useEffect(() => {
    // Get list of patients
    getPatients();
  }, []);

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
      <View style={styles.filterContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <FilterButton
            index={0}
            selectedIndex={selectedFilter}
            title="All"
            onPress={() => {
              getPatients();
              setSelectedFilter(0);
            }}
          />
          <View style={{ width: 20 }}></View>
          <FilterButton
            index={1}
            selectedIndex={selectedFilter}
            title="Critical conditions"
            onPress={() => {
              getPatientsWithCriticalConditions();
              setSelectedFilter(1);
            }}
          />
          <View style={{ width: 20 }}></View>
          <FilterButton
            index={2}
            selectedIndex={selectedFilter}
            title="Saved"
            onPress={() => {
              getPatientsWithCriticalConditions();
              setSelectedFilter(2);
            }}
          />
        </ScrollView>
      </View>

      {/* Show BottomSheet modal when tap on a patient card */}
      <BottomSheet hasDraggableIcon ref={bottomSheet} height={300}>
        <View style={styles.bottomModalContainer}>
          {/* ModalCard of for patient general information */}
          <ModalCard
            onPress={() => {
              bottomSheet.current.close();
              // Navigate to patient general information view
              navigation.navigate("View patient basic info", {
                id: selectedPatientId,
              });
            }}
            title="Patient General Information"
            subtitle="View / Update"
          />

          {/* ModalCard for patient clinical tests */}
          <ModalCard
            onPress={() => {
              bottomSheet.current.close();
              // Navigate to a patient clinical tests view
              // Pass his/her name as route params
              navigation.navigate("Clinical tests", {
                name: selectedName,
              });
            }}
            title="Patient Clinical Record"
            subtitle="Add/ View / Update"
          />
        </View>
      </BottomSheet>

      {/* Show custom loader when loading data from webservice */}
      {isLoading ? (
        <CustomLoader />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ _id }, index) => _id}
          renderItem={({ item }) =>
            selectedFilter === 0 ? (
              // PatientCard custom component
              <PatientCard
                onPress={() => {
                  setSelectedName(item.first_name);
                  setSelectedPatientId(item._id);
                  bottomSheet.current.show();
                }}
                firstname={item.first_name}
                lastname={item.last_name}
                age={item.date_of_birth}
                sex={item.sex}
              />
            ) : (
              // CriticalConditionCard custom component
              <CriticalConditionCard
                id={item.id}
                onPress={() => {
                  setSelectedName(item.firstname);
                  bottomSheet.current.show();
                }}
                firstname={item.firstname}
                lastname={item.lastname}
                age={item.age}
                sex={item.sex}
                conditions={item.conditions}
              />
            )
          }
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

const styles = StyleSheet.create({
  filterContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },

  bottomModalContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
  },
});

export default HomeView;
