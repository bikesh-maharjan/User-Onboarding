import * as yup from "yup";

const formSchema = yup.object({
  username: yup.string().required("username is required"),
  email: yup
    .string()
    .email("email must be valid")
    .min(3, "email must be at least 3 characters")
    .required("email is Required"),
  //   password: yup
  //     .string()
  //     .min(3, "password must be at least 3 characters")
  //     .required("password is Required"),

  password: yup.string().min(3).max(128),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Both passwords need to be the same")
    .required(),
  termsofService: yup.boolean().oneOf([true], "Terms of Service Required"),
});

export default formSchema;
