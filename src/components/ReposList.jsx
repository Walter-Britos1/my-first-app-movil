import { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";
import RepositoryItems from "./RepositoryItems.jsx";

const ReposList = () => {
  const [repositories, setRepositories] = useState(null);

  const repositoriesFetch = async () => {
    const response = await fetch("http://localhost:5000/api/repositories");
    const json = await response.json();
    setRepositories(json)
  };

  useEffect(() => {
    repositoriesFetch()
  }, [])

  const repositoriesList = repositories
      ? repositories.edges.map(edge => edge.node)
      : [];

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
