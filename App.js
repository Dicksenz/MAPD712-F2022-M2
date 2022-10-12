import { StyleSheet, Text, View } from "react-native";
import HomeView from "./views/HomeView";

export default function App() {
  return (
    <View>
      <HomeView />
    </View>
  );
}

const styles = StyleSheet.create({
  noPatientcontainerStyle: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    height: "85%",
    alignItems: "center",
  },
});
