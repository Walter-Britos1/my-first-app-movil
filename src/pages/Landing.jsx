import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";

const image = {
  uri: "https://opensource.com/sites/default/files/lead-images/github-universe.jpg",
};

const Landing = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Rate Repository Applications</Text>
        <Link to="/repositories">
          <Text style={[styles.text, styles.linkText]}>Start 👉🏻</Text>
        </Link>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  },
  linkText: {
    marginBottom: 10, 
  },
});

export default Landing;
