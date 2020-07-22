import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Form";
import * as yup from "yup";
import axios from "axios";
import formSchema from "./validation/formSchema";
import User from "./User";

const intitalFormValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  termsOfService: "",
};

const initialFormErrors = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  termsOfService: "",
};

const initialUsers = [];
const initialDisabled = true;

export default function App() {
  const [users, setUsers] = useState([initialUsers]);
  const [formValues, setFormValues] = useState(intitalFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewUsers = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        setUsers([res.data, ...users]);
        setFormValues(intitalFormValues);
      })
      .catch((err) => {});
  };

  ///// FORM ACTIONS//////////

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const checkboxChange = (name, isChecked) => {
    setFormValues({
      ...formValues,
      termsOfService: {
        ...formValues.termsOfService,
        [name]: isChecked,
      },
    });
  };
  const submit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      confirmPassword: formValues.confirmPassword.trim(),
      termsOfService: Object.keys(formValues.termsOfService).filter(
        (tob) => formValues.termsOfService[tob]
      ),
    };
    postNewUsers(newUser);
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="App">
      <header>
        <h1>User Onboarding</h1>
      </header>
      <Form
        values={formValues}
        inputChange={inputChange}
        checkboxChange={checkboxChange}
        submit={submit}
        disabled={disabled}
        errors={formErrors}
      />
      {users.map((user) => {
        return <User data={user} />;
      })}
    </div>
  );
}
