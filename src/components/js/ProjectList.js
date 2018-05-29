import React, { Component, Fragment } from "react";
import Project from "./Project";
import "../css/ProjectList.css";

class ProjectList extends Component {
  handleHover = () => {};

  render() {
    const projects = [...this.props.item];

    console.log(projects, " projects-list");

    const ProjectList = projects.map(
      ({ id, title, desc, imgPath, ghLink, liveLink }) => (
        <Project id={id} title={title} desc={desc} imgPath={imgPath} ghLink={ghLink} liveLink={liveLink} key={id} />
      )
    );

    return <Fragment>{ProjectList}</Fragment>;
  }
}

export default ProjectList;
