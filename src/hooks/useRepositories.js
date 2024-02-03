import { useState, useEffect } from "react";

const useRepositorieList = () => {
  const [repositories, setRepositories] = useState(null);
 
  const repositoriesFetch = async () => {
    const response = await fetch("http://localhost:5000/api/repositories");
    const json = await response.json();
    setRepositories(json)
  };
  
  useEffect(() => {
    repositoriesFetch()
  }, []);

  const repositoriesList = repositories
  ? repositories.edges.map(edge => edge.node)
  : [];

  return { loading, repositories: repositoriesList, refetch };
};

export default useRepositorieList;