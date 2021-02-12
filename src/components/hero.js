import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

export default _ => {
  const { antDroid, downloads: { edges: [ apple, google ]}} = useStaticQuery(graphql`
    query {
      antDroid: file(relativePath: { eq: "antDroid.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      downloads: allFile(filter: {relativeDirectory: {eq: "downloadButtons"}}) {
        edges {
          node {
            base
            childImageSharp {
              fixed(width: 166, height: 49) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);

  const downloadRegion = className => (
    <div className={ className + " download-app"}>
      <h3 className="light" style={{ width: "100%", marginTop: "0" }}> Download the app </h3>
      <div className="download-icons">
        <Img fixed={  apple.node.childImageSharp.fixed } alt="" />
        <Img fixed={ google.node.childImageSharp.fixed } alt="" />
      </div>
    </div>
  );

  return (
    <div id="hero">
      <div className="container">
        <div className="content-segment">
          <h1 className="hero-text"> Get Paid For Your Data! </h1>
          <h3 className="light" style={{ margin: "0" }}> It's fast and easy to use </h3>
          <br />
          { downloadRegion("sm-anti") }
        </div>
        <div className="content-segment">
          <Img fluid={ antDroid.childImageSharp.fluid } alt="" className="antDroid" />
        </div>
        { downloadRegion("sm-only") }
      </div>
    </div>
  );
}