import React, { Component } from "react";
import "../css/RightDiv.css";
import ProjectList from "./ProjectList";
import Project from "./Project";

class RightDiv extends Component {
  state = {
    input: "",
    projects: [
      { id: 0, title: "Project 1", desc: "About Project 1 and blah blah" },
      { id: 1, title: "Project 2", desc: "About Project 2 and blah blah" },
      { id: 2, title: "Project 3", desc: "About Project 3 and blah blah" },
      { id: 3, title: "Project 4", desc: "About Project 4 and blah blah" },
      { id: 4, title: "Project 5", desc: "About Project 5 and blah blah" }
    ]
  };

  render() {
    const { input, projects } = this.state;

    return <ProjectList item={projects} />;
  }
}

export default RightDiv;
