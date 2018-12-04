import React, { Component } from "react";
import "../css/RightDiv.css";
import ProjectList from "./ProjectList";
import advReactImg from "../img/advreact_preview.png";
import metrolinkImg from "../img/metrolink_preview.png";
import siebertImg from "../img/siebertnet_preview.png";
import rejuvImg from "../img/rejuvenation_preview.png";
import octaImg from "../img/octa_preview.png";
import todoImg from "../img/todo_preview.png";
import portfolioImg from "../img/portfolio_preview.png";

class RightDiv extends Component {
  state = {
    projects: [
      {
        id: 0,
        title: "Ecommerce with React",
        desc: "React.js, GraphQL, Apollo",
        imgPath: advReactImg,
        ghLink: "https://github.com/kimshuk/Adv_react",
        liveLink: "https://andrew-react-prod.herokuapp.com/"
      },
      {
        id: 1,
        title: "Metrolink Trains",
        desc: "jQuery/JS, Vue.js, EpiServer, MVC, ASP.NET",
        imgPath: metrolinkImg,
        ghLink: "",
        liveLink: "https://www.metrolinktrains.com/"
      },
      {
        id: 2,
        title: "Siebertnet",
        desc: "jQuery/JS, Sitefinity, MVC, Webform, ASP.NET",
        imgPath: siebertImg,
        ghLink: "",
        liveLink: "https://siebertnet.com/"
      },
      {
        id: 3,
        title: "Rejuvenation Wellness",
        desc: "Laravel, jQuery/JS",
        imgPath: rejuvImg,
        ghLink: "",
        liveLink: "http://rejuvenationwellness.org/"
      },
      {
        id: 4,
        title: "OCTA Metrolink Weekends",
        desc: "jQuery/JS, ASP.NET",
        imgPath: octaImg,
        ghLink: "",
        liveLink:
          "http://www.octa.net/Metrolink/Metrolink-Weekends/Destinations/"
      },
      {
        id: 5,
        title: "To do List",
        desc: "React.js",
        imgPath: todoImg,
        ghLink: "https://github.com/kimshuk/todo-list",
        liveLink: "/todo-list"
      },
      {
        id: 6,
        title: "Portfolio Website",
        desc: "React.js",
        imgPath: portfolioImg,
        ghLink: "https://github.com/kimshuk/portfolio",
        liveLink: "http://jeesookim.com/"
      },
      {
        id: 7,
        title: "Project Placeholder",
        desc: "About Project and blah blah",
        imgPath: "http://via.placeholder.com/300x500",
        ghLink: "#",
        liveLink: "#"
      }
    ]
  };

  render() {
    const { projects } = this.state;

    return <ProjectList item={projects} />;
  }
}

export default RightDiv;
