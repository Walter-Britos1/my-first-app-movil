import { View, Text } from "react-native";
import { Route, Routes, useLocation } from "react-router-native";
import ReposList from "./ReposList";
import AppBar from "./AppBar";
import Landing from "./Landing";

const Main = () => {
  const { pathname } = useLocation();

  return (
    <View style={{ flex: 1 }}>
      {pathname !== "/" && <AppBar />}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/repositories" element={<ReposList />} />
        <Route exact path="/registrer" element={<Text>Registrer</Text>} />
        <Route exact path="/myprofile" element={<Text>My Profile</Text>} />
        <Route exact path="/about" element={<Text>About Us</Text>} />
        <Route exact path="/signin" element={<Text>Working in it</Text>} />
      </Routes>
    </View>
  );
};

export default Main;
