import { Button, StyleSheet, View } from "react-native";
import { Formik } from "formik";
import { loginValidateSchema } from "../validationSchemas/login";
import FormikInputValues from "../components/FormikInputValues";

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
      validationSchema={loginValidateSchema}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValues
              placeholder="User Name"
              name="userName"
            />
            <FormikInputValues
              placeholder="E-mail"
              name="email"
            />
            <FormikInputValues
              placeholder="Password"
              name="password"
              secureTextEntry
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
