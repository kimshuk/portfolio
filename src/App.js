import React, { Component } from "react";
import "./App.css";
import fontawesome from "@fortawesome/fontawesome";
import brands from "@fortawesome/fontawesome-free-brands";
import faGitHub from "@fortawesome/fontawesome-free-brands/faGithub";
import faEmail from "@fortawesome/fontawesome-free-regular/faEnvelope";
import PortfolioTemplate from "./components/js/PortfolioTemplate";
import LeftDiv from "./components/js/LeftDiv";
import RightDiv from "./components/js/RightDiv";

fontawesome.library.add(brands, faGitHub, faEmail);

class App extends Component {
  render() {
    return <PortfolioTemplate left={<LeftDiv />} right={<RightDiv />} />;
  }
}

export default App;
