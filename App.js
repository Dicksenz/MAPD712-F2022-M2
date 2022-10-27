import { StyleSheet, Text, View } from "react-native";
import HomeView from "./views/HomeView";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddPatientView from "./views/AddPatientView";
import CustomAppbar from "./components/CustomAppbar";
import FabButton from "./components/FabButton";
import ViewGeneral from "./views/ViewGeneral";
import PatientClinicalView from "./views/PatientClinicalView";
import AddBloodPressureView from "./views/AddBloodPressureView";
import AddRespiratoryRateView from "./views/AddRespiratoryRateView";
import AddBloodOxygenLevelView from "./views/AddBloodOxygenLevelView";
import AddHeartBeatRateView from "./views/AddHeartBeatRateView";
import LoginView from "./views/LoginView";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginView}
          options={{
            title: "Login",
            headerStyle: {
              backgroundColor: "#347174",
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeView}
          options={{
            title: "Patients",
            headerStyle: {
              backgroundColor: "#347174",
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="Add new patient"
          component={AddPatientView}
          options={{
            title: "Add new patient",
            headerStyle: {
              backgroundColor: "#347174",
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="View patient basic info"
          component={ViewGeneral}
          options={{
            title: "View patient basic info",
            headerStyle: {
              backgroundColor: "#347174",
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="Clinical tests"
          component={PatientClinicalView}
          options={({ route }) => ({
            title: route.params.name + " clinical records",
            headerStyle: {
              backgroundColor: "#347174",
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontSize: 20,
            },
          })}
        />
        <Stack.Screen
          name="Add Blood pressure"
          component={AddBloodPressureView}
          options={{
            title: "Add Blood pressure",
            headerStyle: {
              backgroundColor: "#347174",
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="Add Respiratory Rate"
          component={AddRespiratoryRateView}
          options={{
            title: "Add Respiratory Rate",
            headerStyle: {
              backgroundColor: "#347174",
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="Add Blood Oxygen level"
          component={AddBloodOxygenLevelView}
          options={{
            title: "Add Blood Oxygen level",
            headerStyle: {
              backgroundColor: "#347174",
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="Add Heart Beat Rate"
          component={AddHeartBeatRateView}
          options={{
            title: "Add Heart Beat Rate",
            headerStyle: {
              backgroundColor: "#347174",
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
