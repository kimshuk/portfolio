import React, { Component } from "react";
import "../css/Project.css";

class Project extends Component {
  static defaultProps = {
    github: "Github",
    liveLink: "Live Link"
  };

  render() {
    const { title, desc, ghLink, imgPath, liveLink } = this.props;
    const img = {
      backgroundImage: `url(${imgPath})`
    };

    return (
      <div className="project" style={img}>
        <article className="project__info">
          <span className="project__content">
            <h2>{title}</h2>
            <p>{desc}</p>
            <div className="project__btn-wrapper">
              {ghLink.length > 0 && (
                <a href={ghLink} className="project__btn" target="_blank">
                  GitHub
                </a>
              )}
              {liveLink.length > 0 && (
                <a href={liveLink} className="project__btn" target="_blank">
                  Live link
                </a>
              )}
            </div>
          </span>
        </article>
      </div>
    );
  }
}

export default Project;
