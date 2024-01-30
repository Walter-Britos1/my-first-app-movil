import { View, Text } from "react-native";
import { Routes, Route, useLocation } from "react-router-native";
import ReposList from "./ReposList";
import AppBar from "./AppBar";
import Landing from "../pages/Landing";
import Login from "../pages/Login"

const Main = () => {
  const { pathname } = useLocation();

  return (
    <View style={{ flex: 1 }}>
      {pathname !== "/" && <AppBar />}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/repositories" element={<ReposList />} />
        <Route exact path="/signin" element={<Login />} />
        <Route exact path="/about" element={<Text>About Us</Text>} />
      </Routes>
    </View>
  );
};

export default Main;
