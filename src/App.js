import React, { Component } from "react";
import "./App.css";
import LeftDiv from "./components/js/LeftDiv";
import Social from "./components/js/Social";

class App extends Component {
  state = {
    sns: [
      { linkedin: "https://www.linkedin.com/in/andrew-kim-72b5598b/" },
      { github: "https://github.com/kimshuk" },
      { email: "mailto:jeesoo2002@gmail.com" }
    ]
  };

  render() {
    const { sns } = this.state;

    return <LeftDiv />;
  }
}

export default App;
