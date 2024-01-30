import { Text, View } from "react-native"
import { Link } from "react-router-native"
import Constants from "expo-constants";

const Landing = () => {
  return (
    <View style={{ marginTop: Constants.statusBarHeight }}>
      <Text>Welcome to application of rate repositories</Text>
      <Link to="/repositories">
        <Text>
          Get into
        </Text>
      </Link>
    </View>
  )
};

export default Landing;