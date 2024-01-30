import { Button, StyleSheet, View } from "react-native";
import { Formik } from "formik";
import StyledTetxtInput from "../components/StyledTextInput";

const initialValues = {
  userName: "",
  email: "",
  password: "",
};
const Login = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleSubmit, values }) => {
        return (
          <View style={styles.form}>
            <StyledTetxtInput
              placeholder="User Name"
              value={values.userName}
              onChangeText={handleChange("userName")}
            />
            <StyledTetxtInput
              placeholder="E-mail"
              value={values.email}
              onChangeText={handleChange("email")}
            />
            <StyledTetxtInput
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange("password")}
            />
            <Button onPress={handleSubmit} title="Log In" />
          </View>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 22
  }
})

export default Login;
