import React from "react";
import { Layout } from "./src/components";
import "./src/styles/global.css";

export const wrapPageElement = ({ element }) => (
  <Layout>
    { element }
  </Layout>
);
