import { ScrollView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>

        <AppBarTab active to="/">Exit</AppBarTab>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    flexDirection: "row",
    padding: Constants.statusBarHeight + 10,
  },
  scroll: {
    paddingBottom: 15,
  }

export default AppBar;