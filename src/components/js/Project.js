import React, { Component } from "react";
import "../css/Project.css";

class Project extends Component {
  render() {
    console.log(this.props, " project");
    const { id, title, desc } = this.props;

    return (
      <a className="project">
        <article>
          <h2>{title}</h2>
          <p>{desc}</p>
        </article>
      </a>
    );
  }
}

export default Project;
