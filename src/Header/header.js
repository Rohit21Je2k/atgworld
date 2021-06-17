import React from "react";
import "./header.css";
import logo from "../media/logo.png";
import search from "../media/search.png";
import downArrow from "../media/down-arrow.png";

export default function header() {
  function openSignup() {
    document.querySelector("body").classList.add("no-scroll");
    const container = document.querySelector(".signup-main-container");
    if (container.classList.contains("fade")) {
      container.classList.remove("fade");
    }
    if (container.classList.contains("visibility-0")) {
      container.classList.add("visibility-1");
    }
  }
  return (
    <header className="header">
      <nav className="flex flex-jc-sb flex-ai-c">
        <a href="/" className="header__logo">
          <img src={logo} alt="logo" />
        </a>

        <button
          id="btnHamburger"
          className="header__hamburger hide-for-desktop"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <form className="flex flex-ai-c header__searchBar hide-for-mobile hide-for-tablet">
          <img src={search} alt="searchBar" />
          <input
            name="searchBar"
            type="text"
            placeholder="Search for your favorite groups in ATG"
          />
        </form>
        <div className="header__join flex flex-ai-c hide-for-mobile hide-for-tablet">
          Create account. <button onClick={openSignup}>Its free!</button>
          <button onClick={openSignup}>
            <img src={downArrow} alt="drop-down-arrow" />
          </button>
        </div>
      </nav>
    </header>
  );
}
