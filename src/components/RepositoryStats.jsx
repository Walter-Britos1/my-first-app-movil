import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import parseThousands from "../utils";

const RepositoryStats = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <StyledText aling='center' fontWeight='bold'>{parseThousands(props.stargazersCount)}</StyledText>
        <StyledText aling='center'>Stars:</StyledText>
      </View>
      <View>
        <StyledText aling='center' fontWeight='bold'>{parseThousands(props.forksCount)}</StyledText>
        <StyledText aling='center'>Forks:</StyledText>
      </View>
      <View>
        <StyledText aling='center' fontWeight='bold'>{props.reviewCount}</StyledText>
        <StyledText aling='center'>Review:</StyledText>
      </View>
      <View>
        <StyledText aling='center' fontWeight='bold'>{props.ratingAverage}</StyledText>
        <StyledText aling='center'>Rating:</StyledText>
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
