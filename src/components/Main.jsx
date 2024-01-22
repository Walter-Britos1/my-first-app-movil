import { View, Text } from 'react-native';
import ReposList from './ReposList';
import AppBar from './AppBar';

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Text>Rate repository Application</Text>
      <ReposList />
    </View>
  )
};

export default Main;