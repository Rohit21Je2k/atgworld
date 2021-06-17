import React from "react";

import Form from "../Edit/Form.js";

import SignupImg from "../media/signup-png.png";

import "./Signup.css";
export default function Signup() {
  function closeOverlay() {
    document.querySelector("body").classList.remove("no-scroll");
    const container = document.querySelector(".signup-main-container");
    if (container.classList.contains("visibility-1")) {
      container.classList.add("fade");
    }
  }
  return (
    <div className="signup-main-container hide-for-mobile visibility-0">
      <div onClick={closeOverlay} className="overlay"></div>
      <div className="signup-desktop">
        <button onClick={closeOverlay} className="flex flex-jc-c flex-ai-c">
          <img
            className="img-16"
            src="https://image.flaticon.com/icons/png/512/1828/1828778.png"
            alt="cross"
          />
        </button>
        <div>
          <div className="signup-desktop-banner">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </div>
          <div className="signup-desktop-form flex flex-jc-sb">
            <Form
              cross={false}
              switchState={false}
              expandBtn="expand"
              terms={false}
            />
            <div className="flex flex-col flex-jc-sb">
              <p>
                Already have an account? <button>Sign In</button>
              </p>
              <img className="signupImg" src={SignupImg} alt="signup" />
              <p>
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
