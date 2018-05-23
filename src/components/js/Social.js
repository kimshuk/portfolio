import React, { Component } from "react";
import "../css/Sns.css";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faLinkedIn from "@fortawesome/fontawesome-free-brands/faLinkedin";
import faGitHub from "@fortawesome/fontawesome-free-brands/faGithub";
import faEmail from "@fortawesome/fontawesome-free-regular/faEnvelopeOpen";

class Social extends Component {
  render() {
    console.log(this.props, " social props");
    const { linkedin, github, email } = this.props;

    return (
      <div className="sns">
        <a className="sns-link" href={linkedin}>
          <FontAwesomeIcon icon={faLinkedIn} />
        </a>
        <a className="sns-link" href={github}>
          <FontAwesomeIcon icon={faGitHub} />
        </a>
        <a className="sns-link" href={`"mailto:"${email}`}>
          <FontAwesomeIcon icon={faEmail} />
        </a>
      </div>
    );
  }
}

export default Social;
