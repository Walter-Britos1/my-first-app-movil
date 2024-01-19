import { FlatList, View, Text } from "react-native";
import repositories from "../data/repositories.js";
import RepositoryItems from "./RepositoryItems.jsx";

const ReposList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={()=> <Text> </Text>}
      renderItem={(({item: repo}) => (
        <RepositoryItems {...repo}/>
      ))}
    ></FlatList>
  );
};

export default ReposList;
