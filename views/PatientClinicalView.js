import { StyleSheet, View, TouchableOpacity, FlatList } from "react-native";

import React, { useState, useEffect } from "react";
import CustomLoader from "../components/CustomLoader";
import FabButton from "../components/FabButton";
import PatientCard from "../components/PatientCard";
import ClinicalCard from "../components/ClinicalCard";

import BottomSheet from "react-native-gesture-bottom-sheet";
import ModalCard from "../components/ModalCard";

const PatientClinicalView = ({ navigation }) => {
  const [isLoading, setisLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [data, setData] = useState([]);

  const bottomSheet = React.useRef();
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
      <BottomSheet hasDraggableIcon ref={bottomSheet} height={500}>
        <View style={styles.bottomModalContainer}>
          <ModalCard
            onPress={() => {
              bottomSheet.current.close();
              //   navigation.navigate("View patient basic info");
            }}
            title="Blood pressure test"
            subtitle="Add test"
          />
          <ModalCard
            onPress={() => {
              bottomSheet.current.close();
              //   navigation.navigate("Clinical tests");
            }}
            title="Respiratory rate"
            subtitle="Add test"
          />
          <ModalCard
            onPress={() => {
              bottomSheet.current.close();
              //   navigation.navigate("Clinical tests");
            }}
            title="Blood Oxygen Level"
            subtitle="Add test"
          />
          <ModalCard
            onPress={() => {
              bottomSheet.current.close();
              //   navigation.navigate("Clinical tests");
            }}
            title="Heart Beat Rate"
            subtitle="Add test"
          />
        </View>
      </BottomSheet>
      {isLoading ? (
        <CustomLoader />
      ) : (
        <FlatList
          data={patientTestLists}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <ClinicalCard
              onPress={() => console.log(`open ${item.category}`)}
              category={item.category}
              date={item.date}
            />
          )}
          onRefresh={() => getPatients()}
          refreshing={isLoading}
        />
      )}

      <TouchableOpacity onPress={() => bottomSheet.current.show()}>
        <FabButton />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomModalContainer: {
    display: "flex",
    flexDirection: "column",
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
  },
});

export default PatientClinicalView;
