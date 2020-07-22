import React from "react";

export default function Form(props) {
  const {
    values,
    submit,
    inputChange,
    checkboxChange,
    disabled,
    errors,
  } = props;


  const onSubmit = evt=>{
      evt.preventDefault()
      submit()
  }

  const onCheckboxChange = evt =>{
      const {name, checked} = evt.target
      checkboxChange(name, checked)
  }
  const onInputChange = evt =>{
      inputChange( name, value)
  }





  return (
    <form className="form container">
      <div className="form-team inputs">
        <label htmlFor="nameInput">
          Name:&nbsp;
          <input
            id="nameInput"
            name="name"
            type="text"
            placeholder="Enter name"
            maxLength="20"
          />
        </label>
        <label htmlFor="emailInput">
          Email: &nbsp;
          <input
            id="emailInput"
            name="email"
            type="email"
            placeholder="Enter email"
            maxLength="20"
          />
        </label>
        <label htmlFor="passwordInput">
          Password: &nbsp;
          <input
            id="passwordInput"
            name="password"
            type="password"
            placeholder="Enter password"
            maxLength="10"
          />
        </label>

        <label>
          Terms of Service
          <input type="checkbox" name="terms" />
        </label>
        <div className="form-group submit">
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
}
