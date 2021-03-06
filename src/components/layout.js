import React from "react";
import Footer from "./footer";
import Join from "./join";
import Navbar from "./navbar";
import "@fontsource/rubik/variable.css";

export default ({ children }) => {
  return (
    <div>
      <Navbar />
      { children }
      <Join />
      <Footer />
    </div>
  );
}
