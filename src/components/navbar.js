import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { ATMLogo, Hamburger } from "../images";

export default _ => {
  const linkTo = ([ content, to ]) => <AnchorLink to={ to } className="link"> { content } </AnchorLink>;
  const links = [
    ["Vision", "/#Vision"],
    ["How It Works", "/#HowItWorks"],
    ["Mission & Brand Partnerships", "/#MissionBrands"],
    ["The People", "/#People"]
  ].map(linkTo);

  return (
    <nav className="navbar">
      <div className="container">
        <AnchorLink to="/">
          <ATMLogo />
        </AnchorLink>
        <label for="hamburger-box" className="hamburger">
          <Hamburger />
        </label>
        <input id="hamburger-box" type="checkbox" />
        <div className="link-region">
          { links }
          <div
            className="btn"
            id="download-app"
            style={{ marginLeft: "10px" }}
            onClick={_ => alert("No navigation in this version of the app :)")}
          >
            Download App
          </div>
        </div>
      </div>
    </nav>
  );
}
