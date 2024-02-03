import { FlatList, View, Text } from "react-native";
import RepositoryItems from "./RepositoryItems.jsx";
import useRepositorieList from "../hooks/useRepositories.js";

const ReposList = () => {
  const { respositories } = useRepositorieList()

  return (
    <FlatList
      data={respositories}
      ItemSeparatorComponent={()=> <Text> </Text>}
      renderItem={(({item: repo}) => (
        <RepositoryItems {...repo}/>
      ))}
    ></FlatList>
  );
};

export default ReposList;
