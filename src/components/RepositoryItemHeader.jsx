import { View, Image, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import theme from "../theme";

const RepositoryItemsHeader = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
      </View>
      <View style={styles.infoContainer}>
        <StyledText fontSize="subHeading" fontWeight="bold">
          Full Name: {props.fullName}
        </StyledText>
        <StyledText color="secondary">Description: {props.description}</StyledText>
        <StyledText style={styles.language}>
          Language: {props.language}
        </StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 2
  },
  imgContainer: {
    paddingRight: 10,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
  infoContainer: {
    flex: 1
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    marginTop: 4,
    marginBottom: 4,
    borderRadius: 4,
    overflow: "hidden",
  },
});

export default RepositoryItemsHeader;
