import React from "react";
import "../css/PortfolioTemplate.css";

const PortfolioTemplate = ({ left, right }) => {
  return (
    <div className="portfolio-wrapper">
      <header className="leftNav">{left}</header>
      <section className="rightDiv">{right}</section>
    </div>
  );
};

export default PortfolioTemplate;
