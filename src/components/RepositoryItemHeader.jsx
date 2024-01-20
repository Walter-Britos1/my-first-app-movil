import { View, Image, StyleSheet  } from "react-native"; 
import StyledText from "./StyledText";

const RepositoryItemsHeader = (props) => {
  return (
    <View>
      <Image style={styles.image} source={{ url: props.ownerAvatarUrl }}/>
      <StyledText fontSize='subHeading' fontWeight='bold'>Full Name: {props.fullName}</StyledText>
      <StyledText >Description: {props.description}</StyledText>
      <StyledText style={styles.language}>Language: {props.language}</StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 48,
    height: 48,
    borderRadius: 4
  }
})

export default RepositoryItemsHeader;