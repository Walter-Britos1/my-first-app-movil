import { useState, useEffect } from "react"

const useRepositories = () => {
  const [repositories, setRepositories] = useState(null);

  const fetchRepositories = async () => {
    const response = await fetch("http://192.168.0.2:5000/api/repositories");

    const json = await response.json();
    
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories()
  }, []);

  const repositoriesNode = repositories
    ? repositories.edges.map(edge => edge.node)
    : []

  return { repositoriesList: repositoriesNode }
};

export default useRepositories;