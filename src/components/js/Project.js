import React, { Component } from "react";
import "../css/Project.css";

class Project extends Component {
  render() {
    console.log(this.props, " project");
    const { title, desc } = this.props;

    return (
      <div className="project">
        <a>
          <article>
            <h2>{title}</h2>
            <p>{desc}</p>
          </article>
        </a>
      </div>
    );
  }
}

export default Project;
