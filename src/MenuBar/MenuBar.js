import React, { useState } from "react";

import "./MenuBar.css";
import downArrow from "../media/down-arrow.png";
import joinPeople from "../media/join-people.png";

export default function MenuBar() {
  const [btnState, setBtnState] = useState("join");
  function handleBtnClick(event) {
    setBtnState((prevValue) => {
      const newValue = prevValue === "join" ? "leave" : "join";
      return newValue;
    });
  }
  function handleMenuClick(event) {
    const target = event.target;
    document.querySelector(".link-selected").classList.remove("link-selected");
    target.classList.add("link-selected");
  }
  return (
    <>
      <div className="menuBar flex flex-jc-sb flex-ai-c hide-for-mobile container">
        <div className="menuBar__links">
          <button onClick={handleMenuClick} className="link-selected">
            All Posts(32)
          </button>
          <button onClick={handleMenuClick}>Article</button>
          <button onClick={handleMenuClick}>Event</button>
          <button onClick={handleMenuClick}>Education</button>
          <button onClick={handleMenuClick}>Job</button>
        </div>
        <div className="flex">
          <button className="menubar__btn menubar__createBtn flex flex-jc-sb flex-ai-c">
            Write a Post <img src={downArrow} alt="drop-down" />
          </button>
          <button
            onClick={handleBtnClick}
            className={`menubar__btn menubar__joinBtn flex flex-jc-sb flex-ai-c ${
              btnState === "leave" && "menuBar__leaveBtn"
            }`}
          >
            <img
              src={
                btnState === "join"
                  ? joinPeople
                  : "https://image.flaticon.com/icons/png/512/1286/1286853.png"
              }
              alt="join-group"
            />
            {btnState === "join" ? "Join Group" : "Leave Group"}
          </button>
        </div>
      </div>
      <div className="menubar-mobile flex flex-jc-sb flex-ai-c hide-for-desktop hide-for-tablet">
        <h2>Posts(368)</h2>
        <button className="flex-inline flex-jc-sb flex-ai-c">
          Filter: All
          <img
            className="img-16"
            src="https://image.flaticon.com/icons/png/512/57/57055.png"
            alt="down-arrow"
          />
        </button>
      </div>
    </>
  );
}
