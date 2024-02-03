import { FlatList, Text } from "react-native";
import RepositoryItems from "./RepositoryItems.jsx";
import useRepositorieList from "../hooks/useRepositories.js";

const ReposList = () => {
  const { repositoriesList } = useRepositorieList()

  return (
    <FlatList
      data={repositoriesList}
      ItemSeparatorComponent={()=> <Text> </Text>}
      renderItem={(({item: repo}) => (
        <RepositoryItems {...repo}/>
      ))}
    ></FlatList>
  );
};

export default ReposList;
