import { Link, useLocation } from "react-router-native";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import StyledText from "./StyledText";
import theme from "../theme";

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation();

  const active = pathname === to;
  
  const styledText = [
    styles.text,
    active && styles.active
  ]

  return (
    <Link to={to} component={TouchableWithoutFeedback}>
      <StyledText fontWeight="bold" style={styledText}>
        {children}
      </StyledText>
    </Link>
  );
};

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 10,
    color: theme.appBar.textSecondary
  },
  active: {
    color: theme.appBar.textPrimary
  }
});

export default AppBarTab;