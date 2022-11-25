import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Alert,
} from "react-native";
import CustomButton from "../components/CustomButton";
import RadioButton from "../components/RadioButton";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import DatePickerButton from "../components/DatePickerButton";
import moment from "moment";
import LoadingOverlay from "../components/LoadingOverlay";

import { Formik } from "formik";
import AddBloodPressureSchema from "../validations/AddBloodPressureSchema";

const FixPatientView = ({ route, navigation }) => {
  const [date, setDate] = React.useState(null);
  const [name, setName] = React.useState(null);

  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const formatDate = moment(date).format("YYYY-MM-DD");

    setDate(formatDate);

    hideDatePicker();
  };

  return (
    <SafeAreaView>
      <ScrollView style={{ height: "100%" }}>
        <Formik
          validationSchema={AddBloodPressureSchema}
          initialValues={{
            name: "",
            diastolic: "",
            systolic: "",
          }}
          onSubmit={(values) => {
            if (date === null) {
              alert("Date is required");
            } else {
              if (
                parseInt(values.systolic) < 70 ||
                parseInt(values.diastolic) < 60
              ) {
                Alert.alert(
                  "Error",
                  `In order to fix this patient, he/she must have a normal systolic and diastolic value.`,
                  [{ text: "OK", onPress: () => {} }]
                );
              } else if (
                parseInt(values.systolic) > 120 ||
                parseInt(values.diastolic) > 80
              ) {
                Alert.alert(
                  "Error",
                  `In order to fix this patient, he/she must have a normal systolic and diastolic value.`,
                  [{ text: "OK", onPress: () => {} }]
                );
              } else {
                setIsLoading(true);
                console.log(values.systolic);

                // Add API to add blood pressure test for a specific patient by their id.
                fetch(
                  `https://smarthealth2.herokuapp.com/patients/${route.params.id}/tests/${route.params.testid}/fix`,
                  {
                    method: "POST",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      category: "Blood Pressure",
                      date: date,
                      nurse_name: values.name,
                      readings: {
                        systolic: values.systolic,
                        diastolic: values.diastolic,
                      },
                    }),
                  }
                )
                  .then((response) => {
                    if (response.ok) {
                      setIsLoading(false);
                      Alert.alert("Success", `Blood Pressure test created.`, [
                        { text: "OK", onPress: () => navigation.goBack() },
                      ]);
                    } else {
                      throw new Error("Something went wrong");
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            }
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
          }) => (
            <View style={{ margin: 12 }}>
              <Text style={styles.labelStyle}>Date Tested</Text>
              <DatePickerButton
                onPress={showDatePicker}
                value={date === null ? "Select date" : date}
              />

              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />

              <Text style={styles.labelStyle}>Nurse name</Text>
              <TextInput
                name="name"
                style={styles.input}
                onChangeText={handleChange("name")}
                value={values.firstname}
                placeholder="Enter nurse or doctor name"
              />
              {errors.name && (
                <Text style={{ fontSize: 10, color: "red" }}>
                  {errors.name}
                </Text>
              )}
              <Text style={styles.labelStyle}>Blood Pressure</Text>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View style={{ flex: 1 }}>
                  <TextInput
                    name="systolic"
                    style={styles.input}
                    onChangeText={handleChange("systolic")}
                    value={values.systolic}
                    placeholder=""
                    keyboardType="numeric"
                  />
                </View>

                <View style={{ marginLeft: 10, marginRight: 10 }}>
                  <Text>/</Text>
                </View>

                <View style={{ flex: 1 }}>
                  <TextInput
                    name="diastolic"
                    style={styles.input}
                    onChangeText={handleChange("diastolic")}
                    value={values.diastolic}
                    placeholder=""
                    keyboardType="number-pad"
                  />
                </View>
                <View style={{ marginLeft: 10, marginRight: 10 }}>
                  <Text>mm/Hg</Text>
                </View>
              </View>
              {errors.systolic && (
                <Text style={{ fontSize: 10, color: "red" }}>
                  {errors.systolic}
                </Text>
              )}
              {errors.diastolic && (
                <Text style={{ fontSize: 10, color: "red" }}>
                  {errors.diastolic}
                </Text>
              )}

              <CustomButton title="SUBMIT" onPress={handleSubmit} />
            </View>
          )}
        </Formik>
      </ScrollView>

      {isLoading && <LoadingOverlay />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop: 10,
    marginBottom: 15,
    borderWidth: 1,
    padding: 10,
  },
  labelStyle: {
    fontSize: 18,
  },
  radioBtnContainer: {
    display: "flex",
    flexDirection: "row",
  },

  loading: {
    backgroundColor: "black",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.7,
  },
});

export default FixPatientView;
