import { StyleSheet, Text } from "react-native";
import theme from '../theme';

const StyledText = ({aling, children, color, fontSize, fontWeight, style, ...restOfProps}) => {
  const textStyles = [
    styles.text,
    aling === 'center' && styles.textAlingCenter,
    color === 'primary' && styles.colorPrimary,
    color === 'secundary' && styles.colorSecundary,
    fontSize === 'subHeading' && styles.subHeading,
    fontWeight === 'bold' && styles.bold
  ];

  return (
    <Text style={textStyles} {...restOfProps}>{children}</Text>
  )
};

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal
  },
  colorPrimary: {
    color: theme.colors.primary
  },
  colorSecundary: {
    color: theme.colors.textSecondary
  },
  bold: {
    fontWeight: theme.fontWeights.bold
  },
  subHeading: {
    fontSize: theme.fontSizes.subHeading
  },
  textAlingCenter: {
    textAling: 'center'
  }
});

export default StyledText;