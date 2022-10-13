import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../components/CustomButton";
import RadioButton from "../components/RadioButton";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import DatePickerButton from "../components/DatePickerButton";
import moment from "moment";

const AddPatientView = () => {
  const [firstname, setFirstname] = React.useState(null);
  const [lastname, setLastname] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [mobile, setMobile] = React.useState(null);
  const [address, setAddress] = React.useState(null);
  const [sex, setSex] = React.useState("M");
  const [dob, setDob] = React.useState(null);

  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

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
    <SafeAreaView style={{ margin: 12 }}>
      <Text style={styles.labelStyle}>First name</Text>
      <TextInput
        style={styles.input}
        onChangeText={setFirstname}
        value={firstname}
        placeholder="Enter first name"
      />
      <Text style={styles.labelStyle}>Last name</Text>
      <TextInput
        style={styles.input}
        onChangeText={setLastname}
        value={lastname}
        placeholder="Enter last name"
      />
      <Text style={styles.labelStyle}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Enter email"
      />
      <Text style={styles.labelStyle}>Mobile number</Text>
      <TextInput
        style={styles.input}
        onChangeText={setMobile}
        value={mobile}
        placeholder="Enter mobile number"
        keyboardType="number-pad"
      />
      <Text style={styles.labelStyle}>Address</Text>
      <TextInput
        style={styles.input}
        onChangeText={setAddress}
        value={address}
        placeholder="Enter address"
      />

      <Text style={styles.labelStyle}>Sex</Text>

      <View
        style={{ ...styles.radioBtnContainer, marginTop: 10, marginBottom: 15 }}
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
      <CustomButton title="SUBMIT" onPress={() => console.log("Submit form")} />
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
});

export default AddPatientView;
