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
              fluid(maxWidth: 175, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  console.log(antDroid, apple, google)

  const downloadRegion = className => (
    <div className={ className + " download-app"}>
      <Img fluid={  apple.node.childImageSharp.fluid } alt="" style={{width: "50%"}} />
      <Img fluid={ google.node.childImageSharp.fluid } alt="" style={{width: "50%"}} />
    </div>
  );

  return <div id="hero">
    <div className="container">
      <div className="content-segment">
        <h1 className="hero-text light"> Get Paid For Your Data! </h1>
        <h3 className="light" style={{ margin: "0" }}> It's fast and easy to use </h3>
        <br />
        <h3 className="light"> Download the app </h3>
        { downloadRegion("sm-anti") }
      </div>
      <div className="content-segment">
        <Img fluid={ antDroid.childImageSharp.fluid } alt="" />
      </div>
      { downloadRegion("sm-only") }
    </div>
  </div>
}