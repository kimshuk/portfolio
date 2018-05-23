import React, { Component, Fragment } from "react";
import "../css/LeftDiv.css";
import Social from "./Social";

class LeftDiv extends Component {
  state = {
    sns: [
      {
        snsName: "faLinkedIn",
        href: "https://www.linkedin.com/in/andrew-kim-72b5598b/"
      },
      { snsName: "faGitHub", href: "https://github.com/kimshuk" },
      { snsName: "faEmail", href: "jeesoo2002@gmail.com" }
    ]
  };

  render() {
    const sns = this.state;
    return (
      <Fragment>
        <a href="/" className="main-logo-link">
          <h1 className="main-logo-title">Portfolio Website</h1>
        </a>
        <div className="main-description">
          <p>I develop websites and web applications </p>
          <Social sns={sns} />
        </div>
      </Fragment>
    );
  }
}

export default LeftDiv;
