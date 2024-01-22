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
        <Route exact path="/signin" element={<Text>Working in it</Text>} />
      </Routes>
    </View>
  );
};

export default Main;
