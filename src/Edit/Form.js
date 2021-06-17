import React, { useState } from "react";

import "./Form.css";
export default function Form(props) {
  const { closeOverlay, cross, switchState, expandBtn, terms } = props;
  const [formState, setFormState] = useState("signup");

  function handleFormSubmit(e) {
    e.preventDefault();
  }
  function changeFormState() {
    setFormState((prevValue) => {
      const newValue = prevValue === "signup" ? "login" : "signup";
      return newValue;
    });
  }
  return (
    <div className="join_form">
      <div className="form__title flex flex-jc-sb">
        <h2>{formState === "signup" ? "Create Account" : "Welcome Back!"}</h2>
        {cross && (
          <button
            onClick={closeOverlay}
            className="flex-inline flex-jc-c flex-ai-c"
          >
            <img
              className="img-16"
              src="https://image.flaticon.com/icons/png/512/1828/1828778.png"
              alt="cross"
            />
          </button>
        )}
      </div>
      <form onSubmit={handleFormSubmit}>
        {formState === "signup" && (
          <div className="flex">
            <input
              className="flex-grow"
              type="text"
              name="firstName"
              placeholder="First Name"
            />
            <input
              className="flex-grow"
              type="text"
              name="LastName"
              placeholder="Last Name"
            />
          </div>
        )}

        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        {formState === "signup" && (
          <input
            type="password"
            name="passwordConfirm"
            placeholder="Confirm Password"
          />
        )}

        <div className="flex flex-jc-sb flex-ai-c margin-t-20 margin-b-20">
          <button className={`submitBtn ${expandBtn}`} type="submit">
            {formState === "signup" ? "Create Account" : "Sign In"}
          </button>
          {switchState && (
            <button onClick={changeFormState} className="switchBtn">
              {formState === "signup" ? "or,Sign In" : "or,Create Account"}
            </button>
          )}
        </div>
      </form>
      <button className="join_form_btn flex flex-jc-c flex-ai-c">
        <img
          className="img-20"
          src="https://image.flaticon.com/icons/png/512/1312/1312139.png"
          alt="facebook"
        />
        {formState === "signup"
          ? " Sign up with Facebook"
          : " Sign in with Facebook"}
      </button>
      <button className="join_form_btn flex flex-jc-c flex-ai-c">
        <img
          className="img-20"
          src="https://image.flaticon.com/icons/png/512/281/281764.png"
          alt="google"
        />
        {formState === "signup"
          ? " Sign up with Google"
          : " Sign in with Google"}
      </button>

      {terms &&
        (formState === "signup" ? (
          <p>
            By signing up, you agree to our Terms & conditions, Privacy policy
          </p>
        ) : (
          <p className="bold">Forgot Password?</p>
        ))}
    </div>
  );
}
