import { useField } from "formik";
import StyledTetxtInput from "./StyledTextInput";


const FormikInputValues = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <StyledTetxtInput 
      value={field.value}
      onChangeText={value => helpers.setValue(value)}
      {...props}
    />
  )
};

export default FormikInputValues;