import React, { useState } from "react";
import "./banner.css";
import backArrow from "../media/back-arrow.png";

export default function Banner() {
  const [groupState, setgroupState] = useState("join");

  function changeGroupState() {
    setgroupState((prevValue) => {
      const newValue = prevValue === "join" ? "leave" : "join";
      return newValue;
    });
  }
  return (
    <div className="banner">
      <button className="banner__back hide-for-desktop">
        <img src={backArrow} alt="goBack" />
      </button>
      <button
        onClick={changeGroupState}
        className="banner__join hide-for-desktop"
      >
        {groupState === "join" ? "Join Group" : "Leave Group"}
      </button>
      <div className="banner__text">
        <h1>Computer Enginerring</h1>
        <p>142,765 Computer Engineers follow this</p>
      </div>
    </div>
  );
}
