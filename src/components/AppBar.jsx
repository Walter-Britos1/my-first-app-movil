import { ScrollView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab active to="/repositories">Repositories</AppBarTab>
        <AppBarTab to="/registrer">Register</AppBarTab>
        <AppBarTab to="/myprofile">My Profile</AppBarTab>
        <AppBarTab to="/about">About Us</AppBarTab>
        <AppBarTab to="/signin">Sign in</AppBarTab>
        <AppBarTab to="/">Exit</AppBarTab>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    flexDirection: "row",
    padding: Constants.statusBarHeight + 5,
  },
  scroll: {
    paddingBottom: -5,
  }
});

export default AppBar;