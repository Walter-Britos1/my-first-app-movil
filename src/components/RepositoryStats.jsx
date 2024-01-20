import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";

const RepositoryStats = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <StyledText aling='center' fontWeight='bold'>Stars:</StyledText>
        <StyledText aling='center'>{props.stargazersCount}</StyledText>
      </View>
      <View>
        <StyledText aling='center' fontWeight='bold'>Forks:</StyledText>
        <StyledText aling='center'>{props.forksCount}</StyledText>
      </View>
      <View>
        <StyledText aling='center' fontWeight='bold'>Review:</StyledText>
        <StyledText aling='center'>{props.reviewCount}</StyledText>
      </View>
      <View>
        <StyledText aling='center' fontWeight='bold'>Rating:</StyledText>
        <StyledText aling='center'>{props.ratingAverage}</StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default RepositoryStats;
