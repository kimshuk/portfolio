import React, { Component } from "react";
import "../css/LeftDiv.css";
import Social from "./Social";

const LeftDiv = () => {
  return (
    <header className="leftNav">
      <a href="/" className="main-logo-link">
        <h1 className="main-logo-title">Portfolio Website</h1>
      </a>
      <div className="main-description">
        <p>I develop websites and web applications </p>
        <Social />
      </div>
    </header>
  );
};

export default LeftDiv;
