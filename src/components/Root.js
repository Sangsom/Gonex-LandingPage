import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import Home from "./Home";

const mainTheme = {
  color: "mediumseagreen",
  white: "#ffffff",
  linkSize: "12px",
  linkActiveColor: "#57c654"
};

class Root extends Component {
  render() {
    return (
      <ThemeProvider theme={mainTheme}>
        <Home />
      </ThemeProvider>
    );
  }
}

export default Root;
