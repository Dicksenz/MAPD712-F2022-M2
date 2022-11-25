import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";

import React, { useState, useEffect } from "react";
import CustomLoader from "../components/CustomLoader";
import FabButton from "../components/FabButton";
import PatientCard from "../components/PatientCard";
import ClinicalCard from "../components/ClinicalCard";

import BottomSheet from "react-native-gesture-bottom-sheet";
import ModalCard from "../components/ModalCard";
import FilterButton from "../components/FilterButton";
import NoClinicalRecords from "../components/NoClinicalRecords";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { date } from "yup";

const PatientClinicalView = ({ route, navigation }) => {
  const [isLoading, setisLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const [data, setData] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(0);

  const bottomSheet = React.useRef();

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("@patientTestList", value);
    } catch (e) {
      console.log(e);
    }
  };
  const getPatientClinicalTests = () => {
    setisLoading(true);
    setIsEmpty(false);
    fetch(
      `https://smarthealth2.herokuapp.com/patients/${route.params.id}/tests`
    )
      .then((response) => response.json())
      .then((json) => {
        if (json.length === 0) {
          console.log("empty");
          setIsEmpty(true);
        }
        setData(json);
        storeData(JSON.stringify(json));
        setisLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setisLoading(false);
      });
  };

  // get data when offline
  const getDataWhenOffline = async () => {
    try {
      setData([]);
      setisLoading(true);
      setIsEmpty(false);
      const value = await AsyncStorage.getItem("@patientTestList");

      if (value !== null) {
        // value previously stored
        console.log(JSON.parse(value));
        setisLoading(false);
        setData(JSON.parse(value));
      } else {
        setisLoading(false);
        setIsEmpty(true);
      }
    } catch (e) {
      setisLoading(false);
      // error reading value
      console.log(e);
    }
  };

  useEffect(() => {
    getPatientClinicalTests();
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
        <FilterButton
          index={0}
          selectedIndex={selectedFilter}
          title="All"
          onPress={() => {
            getPatientClinicalTests();
            setSelectedFilter(0);
          }}
        />
        <View style={{ width: 20 }}></View>
        <FilterButton
          index={1}
          selectedIndex={selectedFilter}
          title="Saved"
          onPress={() => {
            getDataWhenOffline();
            setSelectedFilter(1);
          }}
        />
      </View>
      <BottomSheet hasDraggableIcon ref={bottomSheet} height={500}>
        <View style={styles.bottomModalContainer}>
          <ModalCard
            onPress={() => {
              bottomSheet.current.close();
              navigation.navigate("Add Blood pressure", {
                id: route.params.id,
              });
            }}
            title="Blood pressure test"
            subtitle="Add test"
          />
          <ModalCard
            onPress={() => {
              bottomSheet.current.close();
              navigation.navigate("Add Respiratory Rate", {
                id: route.params.id,
              });
            }}
            title="Respiratory rate"
            subtitle="Add test"
          />
          <ModalCard
            onPress={() => {
              bottomSheet.current.close();
              navigation.navigate("Add Blood Oxygen level", {
                id: route.params.id,
              });
            }}
            title="Blood Oxygen Level"
            subtitle="Add test"
          />
          <ModalCard
            onPress={() => {
              bottomSheet.current.close();
              navigation.navigate("Add Heart Beat Rate", {
                id: route.params.id,
              });
            }}
            title="Heart Beat Rate"
            subtitle="Add test"
          />
        </View>
      </BottomSheet>
      {isLoading ? (
        <CustomLoader />
      ) : isEmpty ? (
        <NoClinicalRecords onPress={() => getPatientClinicalTests()} />
      ) : (
        <FlatList
          data={data.reverse()}
          keyExtractor={({ _id }, index) => _id}
          renderItem={({ item }) => (
            <ClinicalCard
              onPress={() => {}}
              category={item.category}
              readings={item.readings}
              nurse={item.nurse_name}
              date={item.date}
            />
          )}
          onRefresh={() => getPatientClinicalTests()}
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

  filterContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
});

export default PatientClinicalView;
