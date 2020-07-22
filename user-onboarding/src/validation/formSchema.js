import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup
    .string()
    .email("Email must be valid")
    .required("Email is required"),
  email: yup
    .string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is Required"),
  password: yup.string().oneOf("Password is required"),
  confirmPassword: yup.string().required("Password must match "),
  termsOfService: yup
    .boolean()
    .oneOf([true, null], "Please agree to the terms of service!"),
});

export default formSchema;
