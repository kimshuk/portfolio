import React, { Component } from "react";
import "../css/RightDiv.css";
import ProjectList from "./ProjectList";

class RightDiv extends Component {
  state = {
    projects: [
      {
        id: 0,
        title: "Metrolink Trains",
        desc: "About Project 1 and blah blah",
        imgPath: "http://via.placeholder.com/500x600",
        ghLink: "",
        liveLink: "​https://www.metrolinktrains.com/"
      },
      {
        id: 1,
        title: "Siebertnet",
        desc: "About Project 2 and blah blah",
        imgPath: "http://via.placeholder.com/400x500",
        ghLink: "",
        liveLink: "https://siebertnet.com/"
      },
      {
        id: 2,
        title: "Rejuvenation Wellness",
        desc: "About Project 3 and blah blah",
        imgPath: "http://via.placeholder.com/300x500",
        ghLink: "",
        liveLink: "http://rejuvenationwellness.org/"
      },
      {
        id: 3,
        title: "OCTA Metrolink Weekends",
        desc: "About Project 4 and blah blah",
        imgPath: "http://via.placeholder.com/300x500",
        ghLink: "",
        liveLink:
          "http://www.octa.net/Metrolink/Metrolink-Weekends/Destinations/"
      },
      {
        id: 4,
        title: "To do List",
        desc: "About Project 5 and blah blah",
        imgPath: "http://via.placeholder.com/300x500",
        ghLink: "https://github.com/kimshuk/todo-list",
        liveLink: ""
      },
      {
        id: 5,
        title: "Project 6",
        desc: "About Project 6 and blah blah",
        imgPath: "http://via.placeholder.com/300x500",
        ghLink: "https://github.com/kimshuk",
        liveLink: "https://siebertnet.com/"
      },
      {
        id: 6,
        title: "Project 7",
        desc: "About Project 7 and blah blah",
        imgPath: "http://via.placeholder.com/300x500",
        ghLink: "https://github.com/kimshuk",
        liveLink: "https://siebertnet.com/"
      }
    ]
  };

  render() {
    const { projects } = this.state;

    return <ProjectList item={projects} />;
  }
}

export default RightDiv;
