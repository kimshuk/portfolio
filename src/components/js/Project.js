import React, { Component, Fragment } from "react";
import "../css/Project.css";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

class Project extends Component {
  static defaultProps = {
    github: "Github",
    liveLink: "Live Link"
  };

  render() {
    const { title, desc, imgPath, ghLink, liveLink } = this.props;
    const img = {
      backgroundImage: `url(${imgPath})`
    };

    return (
      <div className="project-wrapper">
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
        <div className="project__info--mobile">
          <h2>{title}</h2>
          <p>{desc}</p>
          <div className="project__btn-wrapper--mobile">
            {ghLink.length > 0 && (
              <a className="project__btn--mobile" href={ghLink} target="_blank">
                <FontAwesomeIcon
                  icon={["fab", "github"]}
                  className="project__icon--mobile"
                />
              </a>
            )}
            {liveLink.length > 0 && (
              <a
                className="project__btn--mobile"
                href={liveLink}
                target="_blank"
              >
                <FontAwesomeIcon
                  icon="link"
                  className="project__icon--mobile"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
