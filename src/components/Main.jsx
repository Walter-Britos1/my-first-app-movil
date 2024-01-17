import { View, Text } from 'react-native';
import Constants from 'expo-constants'
import ReposList from './ReposList';

const Main = () => {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <Text>Rate repository Application</Text>
      <ReposList />
    </View>
  )
};

export default Main;