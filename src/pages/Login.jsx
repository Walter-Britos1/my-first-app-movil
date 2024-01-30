import { Button, TextInput, View } from "react-native";
import { Formik } from "formik";

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
          <View>
            <TextInput
              placeholder="User Name"
              value={values.userName}
              onChangeText={handleChange("userName")}
            />
            <TextInput
              placeholder="E-mail"
              value={values.email}
              onChangeText={handleChange("email")}
            />
            <TextInput
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

export default Login;
