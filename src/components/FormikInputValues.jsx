import { useField } from "formik";
import { StyleSheet } from "react-native";
import StyledTetxtInput from "./StyledTextInput";
import StyledText from "./StyledText";

const FormikInputValues = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <>
      <StyledTetxtInput
        error={meta.error}
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    fontSize: 15,
    marginBottom: 15,
    marginTop: -10,
    color: "red"
  }
})

export default FormikInputValues;
