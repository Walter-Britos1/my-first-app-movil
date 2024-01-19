import { View, Text } from "react-native";

const RepositoryItems = (props) => {
  return (
    <View key={props.id} style={{ padding: 20, paddingBotton: 5, }}>
      <Text style={{ fontWeight: 'bold',  marginBotton: 5 }}>id: {props.id}</Text>
      <Text>Full Name: {props.fullName}</Text>
      <Text>Description: {props.description}</Text>
      <Text>Language: {props.language}</Text>
      <Text>Stars: {props.stargazersCount}</Text>
      <Text>Forks: {props.forksCount}</Text>
      <Text>Review: {props.reviewCount}</Text>
      <Text>Rating: {props.ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItems;
