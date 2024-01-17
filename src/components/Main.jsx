import { View, Text } from 'react-native';
import Constants from 'expo-constants'

const Main = () => {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <Text>Rate repository Application</Text>
    </View>
  )
};

export default Main;