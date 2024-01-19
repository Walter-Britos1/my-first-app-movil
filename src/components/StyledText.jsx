import { StyleSheet, Text } from "react-native";
import theme from '../theme'

const StyledText = ({children, color, fontSize, fontWeight, style, ...restOfProps}) => {
  const textStyles = [
    styles.text,
    color === 'primary' && styles.colorPrimary,
    color === 'secundary' && styles.colorSecundary,
    fontSize === 'subHeading' && styles.subHeading,
    fontWeight === 'bold' && styles.bold
  ]

  return (
    <Text style={textStyles} {...restOfProps}>{children}</Text>
  )
}

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
});

export default StyledText;