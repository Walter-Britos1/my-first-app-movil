import { View, StyleSheet } from "react-native";
import RepositoryStats from "./RepositoryStats";
import RepositoryItemsHeader from "./RepositoryItemHeader";

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
  }
});

export default RepositoryItems;
