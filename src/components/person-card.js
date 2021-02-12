import React from "react";
import Img from "gatsby-image";

export default ({ person: { avatar, bonafides, name, role } }) => {
  return (
    <div className="person-card">
      <Img fluid={ avatar.fluid } alt={ name } className="avatar" />
      <h4>{ name }</h4>
      <h4>{ bonafides }</h4>
      <h5 style={{ marginTop: "auto" }}>{ role }</h5>
    </div>
  );
}
