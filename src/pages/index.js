import * as React from "react";
import { Hero, ThePeople } from "../components";

export default _ => {

  
  return (
    <>
      <Hero />
      <div id="story" style={{ height: "2000px" }} /> {/* Placeholder height*/}
      <ThePeople />
    </>
  );
}
