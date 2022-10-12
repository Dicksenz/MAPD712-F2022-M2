import { StyleSheet, Text, View } from "react-native";
import CustomAppbar from "../components/CustomAppbar";
import NoPatients from "../components/NoPatients";
export default function HomeView() {
  return (
    <View>
      <CustomAppbar title="Patients" />
      <NoPatients />
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
