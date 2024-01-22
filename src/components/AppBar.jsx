import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab active to='/'>Repositories</AppBarTab>
      <AppBarTab active to='/signin'>Sign in</AppBarTab>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    flexDirection: "row",
    padding: Constants.statusBarHeight + 10,
    paddingBottom: 10,
  },
})

export default AppBar;