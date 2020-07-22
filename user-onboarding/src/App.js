import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Form";
import * as yup from "yup";
import axios from "axios";
import formSchema from "./validation/formSchema";
function App() {
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

  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(intitalFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);


  const getUsers =()=>{
    
  }


  return (
    <div className="App">
      <Form> User Boarding</Form>
    </div>
  );
}

export default App;
