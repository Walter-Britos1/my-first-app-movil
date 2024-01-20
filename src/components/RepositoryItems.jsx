import { View, StyleSheet } from "react-native";
import RepositoryStats from "./RepositoryStats";
import RepositoryItemsHeader from "./RepositoryItemHeader";
import theme from "../theme";

const RepositoryItems = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <RepositoryItemsHeader {...props}/>
      <RepositoryStats {...props}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 4,
    overflow: 'hidden'
  }
});

export default RepositoryItems;
