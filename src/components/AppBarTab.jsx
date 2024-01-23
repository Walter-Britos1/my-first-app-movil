import { Link } from "react-router-native";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import StyledText from "./StyledText";
import theme from "../theme";

const AppBarTab = ({ active, children, to }) => {
  return (
    <Link to={to} component={TouchableWithoutFeedback}>
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