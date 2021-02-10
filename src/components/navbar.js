import React from "react";
import { Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { ATMLogo } from "../images";

export default _ => {
  const linkTo = ([ content, to ]) => <AnchorLink to={ to } className="link">{ content }</AnchorLink>;
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
        <div className="link-region">
          { links }
        </div>
        <Link className="btn" style={{ marginLeft: "10px" }}>
          Download App
        </Link>
      </div>
    </nav>
  );
}
