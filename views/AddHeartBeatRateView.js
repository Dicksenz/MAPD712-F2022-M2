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
} from "react-native";
import CustomButton from "../components/CustomButton";
import RadioButton from "../components/RadioButton";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import DatePickerButton from "../components/DatePickerButton";
import moment from "moment";
import LoadingOverlay from "../components/LoadingOverlay";

import { Formik } from "formik";
import AddHeartBeatRateSchema from "../validations/AddHeartBeatRateSchema";

const AddHeartBeatRateView = () => {
  const [date, setDate] = React.useState(null);

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
          validationSchema={AddHeartBeatRateSchema}
          initialValues={{
            name: "",
            rate: "",
          }}
          onSubmit={(values) => {
            console.log("submit");
            if (date === null) {
              alert("Date is required");
            } else {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
                console.log(values);
              }, 3000);
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
              <Text style={styles.labelStyle}>Heart Beat Rate</Text>

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
                    style={styles.input}
                    onChangeText={handleChange("rate")}
                    value={values.rate}
                    placeholder=""
                    keyboardType="numeric"
                  />
                </View>

                <View style={{ marginLeft: 10, marginRight: 10 }}>
                  <Text>BPM</Text>
                </View>
              </View>
              {errors.rate && (
                <Text style={{ fontSize: 10, color: "red" }}>
                  {errors.rate}
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

export default AddHeartBeatRateView;
