import React from "react";

import Form from "./Form.js";

import "./Edit.css";

export default function Edit() {
  function openOverlay() {
    const body = document.querySelector("body");
    const overlay = document.querySelector(".overlay");
    const signup = document.querySelector(".edit > .signup");
    body.classList.add("no-scroll");
    overlay.classList.add("visibility-1");
    if (signup.classList.contains("pull-down")) {
      signup.classList.remove("pull-down");
    }
    signup.classList.add("pull-up");
  }

  function closeOverlay() {
    const body = document.querySelector("body");
    const overlay = document.querySelector(".overlay");
    const signup = document.querySelector(".edit > .signup");
    body.classList.remove("no-scroll");
    overlay.classList.remove("visibility-1");
    if (signup.classList.contains("pull-up")) {
      signup.classList.remove("pull-up");
    }
    signup.classList.add("pull-down");
  }
  return (
    <div className="edit hide-for-desktop hide-for-tablet">
      <button onClick={openOverlay} className="flex flex-jc-c flex-ai-c">
        <img
          className="img-20"
          src="https://image.flaticon.com/icons/png/512/117/117476.png"
          alt="edit"
        />
      </button>
      <div onClick={closeOverlay} className="overlay visibility-0"></div>
      <div className="signup visibility-0">
        <Form
          closeOverlay={closeOverlay}
          cross={true}
          switchState={true}
          terms={true}
        />
      </div>
    </div>
  );
}
