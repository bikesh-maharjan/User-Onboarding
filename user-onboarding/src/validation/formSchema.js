import * as yup from "yup";

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("Email must be valid")
    .required("Email is required"),
  username: yup
    .string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is Required"),
  password: yup.string().oneOf("Password is required"),
  termsOfService: yup
    .boolean()
    .required("Please agree to the terms of service!"),
});

export default formSchema;
