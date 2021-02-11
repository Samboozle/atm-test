import React from "react";
import { people } from "../content";
import PersonCard from "./person-card";

export default _ => {
  
  const personCard = person => <PersonCard person={ person } />;

  return (
    <div class="people">
      <h3> The People </h3>
      { people.map(personCard) }
    </div>
  );
};
