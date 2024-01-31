import * as yup from "yup";

export const loginValidateSchema = yup.object().shape({
  userName: yup
      .string()
      .required()
      .min(5, "User Name too short!")
      .max(13, "User Name too long!"),

  email: yup
      .string()
      .email()
      .required("E-mail is required"),
  
  password: yup
      .string()
      .min(5, "Password too short!")
      .max(13, "Password too long!"),
});