import React, { Component } from "react";
import "./App.css";
import PortfolioTemplate from "./components/js/PortfolioTemplate";
import LeftDiv from "./components/js/LeftDiv";
import RightDiv from "./components/js/RightDiv";

class App extends Component {
  render() {
    return <PortfolioTemplate left={<LeftDiv />} right={<RightDiv />} />;
  }
}

export default App;
