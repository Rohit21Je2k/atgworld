import React from "react";
import Header from "./Header/header.js";
import Banner from "./Banner/banner.js";
import MenuBar from "./MenuBar/MenuBar.js";
import Post from "./Posts/Post.js";
import Edit from "./Edit/Edit.js";
import Signup from "./Signup/Signup.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <MenuBar />
      <Post />
      <Edit />
      <Signup />
    </div>
  );
}

export default App;
