import React, { Component } from "react";
import "../css/LeftDiv.css";
import Social from "./Social";

class LeftDiv extends Component {
  state = {
    sns: [
      {
        snsName: "linkedin",
        href: "https://www.linkedin.com/in/andrew-kim-72b5598b/"
      },
      { snsName: "github", href: "https://github.com/kimshuk" },
      { snsName: "envelope-open", href: "jeesoo2002@gmail.com" }
    ]
  };

  render() {
    const { sns } = this.state;
    return (
      <div className="main-wrapper">
        <a href="/">
          <span className="main-logo-link">
            <h1 className="main-logo-title">Andrew Jeesoo Kim</h1>
          </span>
        </a>
        <div className="main-description">
          <p>I develop websites and web applications </p>
          <Social sns={sns} />
        </div>
      </div>
    );
  }
}

export default LeftDiv;
