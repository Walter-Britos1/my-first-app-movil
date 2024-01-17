import { View, Text } from "react-native"
import repositories from '../data/repositories.js'

const ReposList = () => {
  return (
    <View>
      {repositories.map(repo => (
        <View key={repo.id}>
          <Text>id: {repo.id}</Text>
          <Text>Full Name: {repo.fullName}</Text>
          <Text>Description: {repo.description}</Text>
          <Text>Language: {repo.language}</Text>
          <Text>Stars: {repo.stargazersCount}</Text>
          <Text>Forks: {repo.forksCount}</Text>
          <Text>Review: {repo.reviewCount}</Text>
          <Text>Rating: {repo.ratingAverage}</Text>
        </View>
      ))}
    </View>
  )
};

export default ReposList;