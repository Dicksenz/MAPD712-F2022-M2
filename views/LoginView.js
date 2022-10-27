import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
import { Formik } from "formik";
import LoginSchema from "../validations/LoginSchema";
import LoadingOverlay from "../components/LoadingOverlay";
import CustomButton from "../components/CustomButton";

const LoginView = ({ navigation }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  return (
    <SafeAreaView>
      <ScrollView style={{ height: "100%" }}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>SmartHealth</Text>
            <Text style={{ ...styles.title, fontSize: 25, fontWeight: "500" }}>
              Services
            </Text>
          </View>

          <Formik
            validationSchema={LoginSchema}
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={(values) => {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
                console.log(values);
                navigation.navigate("Home");
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
                <Text style={styles.labelStyle}>Username</Text>
                <TextInput
                  name="username"
                  style={styles.input}
                  onChangeText={handleChange("username")}
                  value={values.firstname}
                  placeholder="Enter Username"
                />
                {errors.username && (
                  <Text style={{ fontSize: 10, color: "red" }}>
                    {errors.username}
                  </Text>
                )}
                <Text style={styles.labelStyle}>Password</Text>
                <TextInput
                  secureTextEntry={true}
                  style={styles.input}
                  onChangeText={handleChange("password")}
                  value={values.lastname}
                  placeholder="Enter password"
                />
                {errors.password && (
                  <Text style={{ fontSize: 10, color: "red" }}>
                    {errors.password}
                  </Text>
                )}

                <CustomButton title="SUBMIT" onPress={handleSubmit} />
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>

      {isLoading && <LoadingOverlay />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    paddingTop: 60,
    backgroundColor: "transparent",
  },

  title: {
    color: "#347174",
    fontSize: 40,
    fontWeight: "bold",
  },

  titleContainer: {
    marginLeft: 12,
    marginRight: 12,
    borderColor: "#347174",
    display: "flex",
    alignItems: "center",
    borderWidth: 4,
    padding: 15,
    borderRadius: 20,
    marginBottom: 20,
  },

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
});

export default LoginView;
