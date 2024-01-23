import { View, Text } from "react-native";
import { Route, Routes } from "react-router-native";
import ReposList from "./ReposList";
import AppBar from "./AppBar";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
      <Route exact path="/" element={<ReposList />} />
        <Route exact path="/registrer" element={<Text>Registrer</Text>} />
        <Route exact path="/myprofile" element={<Text>My Profile</Text>} />
        <Route exact path="/about" element={<Text>About Us</Text>} />
        <Route exact path="/signin" element={<Text>Working in it</Text>} />
      </Routes>
    </View>
  );
};

export default Main;
