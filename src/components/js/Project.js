import React, { Component } from "react";
import "../css/Project.css";

class Project extends Component {
  static defaultProps = {
    github: "Github",
    liveLink: "Live Link"
  };

  render() {
    console.log(this.props, " project");
    const { title, desc } = this.props;

    return (
      <div className="project">
        <article className="project__info">
          <span className="project__content">
            <h2>{title}</h2>
            <p>{desc}</p>
            <a href="" className="project__btn">
              {this.props.github}
            </a>
            <a href="" className="project__btn">
              {this.props.liveLink}
            </a>
          </span>
        </article>
      </div>
    );
  }
}

export default Project;
