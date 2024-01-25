import { Text, View } from "react-native"
import { Link } from "react-router-native"

const Landing = () => {
  return (
    <View>
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