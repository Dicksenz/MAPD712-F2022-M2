import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Appbar from "./components/Appbar";

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar title="Patients" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});
