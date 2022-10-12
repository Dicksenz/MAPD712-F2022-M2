import { StyleSheet, Text, View } from "react-native";
import CustomAppbar from "../components/CustomAppbar";
import NoPatients from "../components/NoPatients";
import { Stack, FAB, Switch } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function HomeView() {
  return (
    <View>
      <CustomAppbar title="Patients" />
      <NoPatients />
      <FAB
        icon={(props) => <Icon name="plus" {...props} />}
        color="#347174"
        style={styles.fabStyle}
      />
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
  fabStyle: {
    position: "absolute",
    right: 12,
    bottom: 0,
  },
});
