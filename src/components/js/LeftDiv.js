import React, { Component } from "react";
import "../css/LeftDiv.css";

const LeftDiv = () => {
  return (
    <header className="leftNav">
      <a href="/" className="main-logo-link">
        <h1 className="main-logo-title">Portfolio Website</h1>
      </a>
      <p className="main-description">
        I develop websites and web applications{" "}
      </p>
    </header>
  );
};

export default LeftDiv;
