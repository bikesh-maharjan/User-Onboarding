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

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onCheckboxChange = (evt) => {
    const { name, checked } = evt.target;
    console.log({ name, checked });
    checkboxChange(name, checked);
  };
  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    inputChange(name, value);
  };
  console.log({ check: values.termsOfService });
  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group submit">
        <label htmlFor="nameInput">
          Username:&nbsp;
          <input
            value={values.username}
            onChange={onInputChange}
            id="nameInput"
            name="username"
            type="text"
            placeholder="Enter username"
            maxLength="20"
          />
        </label>
        <label htmlFor="emailInput">
          Email: &nbsp;
          <input
            value={values.email}
            onChange={onInputChange}
            id="emailInput"
            name="email"
            type="email"
            placeholder="Enter Valid email"
            maxLength="20"
          />
        </label>
        <label htmlFor="passwordInput">
          Password: &nbsp;
          <input
            value={values.password}
            onChange={onInputChange}
            id="passwordInput"
            name="password"
            type="password"
            placeholder="Enter password"
            maxLength="10"
          />
        </label>
        <label htmlFor="confirmPassword">
          Confirm Password: &nbsp;
          <input
            value={values.confirmPassword}
            onChange={onInputChange}
            id="passwordConfirmInput"
            name="confirmPassword"
            type="password"
            placeholder="Re-Enter password"
            maxLength="10"
          />
        </label>

        <label>
          Terms of Service
          <input
            type="checkbox"
            name="termsOfService"
            id="termsOfService"
            checked={values.termsOfService}
            onChange={onCheckboxChange}
          />
        </label>
        <div className="form-group submit">
          <div className="errors">
            <div>{errors.username}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.confirmPassword}</div>
            <div>{errors.termsOfService}</div>
          </div>
          {!disabled && ( // this disabled  the button and only shows when everythign is filled out
            <button
              id="submitBtn"
              disabled={disabled}
              // style={
              //   disabled ? { borderColor: "grey" } : { borderColor: "orange" }
              // }
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
