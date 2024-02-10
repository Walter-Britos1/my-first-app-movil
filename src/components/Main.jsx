import { View, Text } from "react-native";
import { Routes, Route, useLocation } from "react-router-native";
import ReposList from "./ReposList";
import AppBar from "./AppBar";
import Landing from "../pages/Landing";
import Login from "../pages/Login"
import About from "../pages/About";

const Main = () => {
  const { pathname } = useLocation();

  return (
    <View style={{ flex: 1 }}>
      {pathname !== "/" && <AppBar />}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/repositories" element={<ReposList />} />
        <Route exact path="/signin" element={<Login />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </View>
  );
};

export default Main;
