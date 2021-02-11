import React from "react";
import { people } from "../content";
import PersonCard from "./person-card";
import { graphql, useStaticQuery } from "gatsby";

export default _ => {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "avatars"}}) {
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

  const avatars = allFile.edges.reduce((collection, { node: { base, childImageSharp } }) => {
    collection[base] = childImageSharp;
    return collection;
  }, {});
  
  const personCard = person => <PersonCard person={{ ...person, avatar: avatars[person.avatar] }} />;

  return (
    <div className="people" id="People">
      <div className="container">
        <h3 style={{ width: "100%", fontSize: "32px", textAlign: "center" }}> The People </h3>
        { people.map(personCard) }
      </div>
    </div>
  );
};
