import { Link } from "react-router-native";
import { StyleSheet } from "react-native";
import StyledText from "./StyledText";
import theme from "../theme";

const AppBarTab = ({ active, children, to }) => {
  return (
    <Link to={to}>
      <StyledText fontWeight="bold" style={styles.text}>
        {children}
      </StyledText>
    </Link>
  );
};

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 10,
    color: theme.appBar.textPrimary
  }
});

export default AppBarTab;