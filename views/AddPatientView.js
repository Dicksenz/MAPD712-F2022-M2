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
import AddPatientSchema from "../validations/AddPatientSchema";

const AddPatientView = () => {
  const [firstname, setFirstname] = React.useState(null);
  const [lastname, setLastname] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [mobile, setMobile] = React.useState(null);
  const [address, setAddress] = React.useState(null);
  const [sex, setSex] = React.useState("M");
  const [dob, setDob] = React.useState(null);

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

    setDob(formatDate);

    hideDatePicker();
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Formik
          validationSchema={AddPatientSchema}
          initialValues={{
            email: "",
            firstname: "",
            lastname: "",
            mobile: "",
            address: "",
          }}
          onSubmit={(values) => {
            setIsLoading(true);
            setTimeout(() => {
              setIsLoading(false);
              console.log(values);
            }, 3000);
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
              <Text style={styles.labelStyle}>First name</Text>
              <TextInput
                name="firstname"
                style={styles.input}
                onChangeText={handleChange("firstname")}
                value={values.firstname}
                placeholder="Enter first name"
              />
              {errors.firstname && (
                <Text style={{ fontSize: 10, color: "red" }}>
                  {errors.firstname}
                </Text>
              )}
              <Text style={styles.labelStyle}>Last name</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("lastname")}
                value={values.lastname}
                placeholder="Enter last name"
              />
              {errors.lastname && (
                <Text style={{ fontSize: 10, color: "red" }}>
                  {errors.lastname}
                </Text>
              )}
              <Text style={styles.labelStyle}>Email</Text>
              <TextInput
                name="email"
                style={styles.input}
                onChangeText={handleChange("email")}
                value={values.email}
                placeholder="Enter email"
                keyboardType="email-address"
              />
              {errors.email && (
                <Text style={{ fontSize: 10, color: "red" }}>
                  {errors.email}
                </Text>
              )}
              <Text style={styles.labelStyle}>Mobile number</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("mobile")}
                value={values.mobile}
                keyboardType="number-pad"
              />
              {errors.mobile && (
                <Text style={{ fontSize: 10, color: "red" }}>
                  {errors.mobile}
                </Text>
              )}
              <Text style={styles.labelStyle}>Address</Text>
              <TextInput
                style={styles.input}
                onChangeText={handleChange("address")}
                value={values.address}
                placeholder="Enter address"
              />
              {errors.address && (
                <Text style={{ fontSize: 10, color: "red" }}>
                  {errors.address}
                </Text>
              )}

              <Text style={styles.labelStyle}>Sex</Text>

              <View
                style={{
                  ...styles.radioBtnContainer,
                  marginTop: 10,
                  marginBottom: 15,
                }}
              >
                <View style={styles.radioBtnContainer}>
                  <RadioButton
                    checked={sex === "M" ? true : false}
                    onPress={() => setSex("M")}
                  />
                  <Text>Male</Text>
                </View>
                <View style={styles.radioBtnContainer}>
                  <RadioButton
                    checked={sex === "F" ? true : false}
                    onPress={() => setSex("F")}
                  />
                  <Text>Female</Text>
                </View>
              </View>

              <Text style={styles.labelStyle}>Date of Birth</Text>
              <DatePickerButton
                onPress={showDatePicker}
                value={dob === null ? "Select date" : dob}
              />

              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
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

export default AddPatientView;
