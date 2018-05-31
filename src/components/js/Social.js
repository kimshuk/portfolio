import React, { Component } from "react";
import "../css/Sns.css";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

class Social extends Component {
  render() {
    const [linkedin, github, email] = [...this.props.sns];

    return (
      <div className="sns">
        <a className="sns-link" href={linkedin.href} target="_blank">
          <FontAwesomeIcon icon={["fab", `${linkedin.snsName}`]} />
        </a>
        <a className="sns-link" href={github.href} target="_blank">
          <FontAwesomeIcon icon={["fab", `${github.snsName}`]} />
        </a>
        <a className="sns-link" href="mailto:jeesoo2002@gmail.com">
          <FontAwesomeIcon icon={["far", "envelope"]} />
        </a>
      </div>
    );
  }
}

export default Social;
