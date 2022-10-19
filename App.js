import { StyleSheet, Text, View } from "react-native";
import HomeView from "./views/HomeView";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddPatientView from "./views/AddPatientView";
import CustomAppbar from "./components/CustomAppbar";
import FabButton from "./components/FabButton";
import ViewGeneral from "./views/ViewGeneral";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
