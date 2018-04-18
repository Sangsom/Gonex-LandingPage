import React, { Component, Fragment } from "react";
import { ThemeProvider } from "styled-components";
import Home from "./Home";
import Slider from "./Slider";

const mainTheme = {
  textWhite: "#ffffff",
  textRed: "#f95353",
  linkSize: "12px",
  linkActiveColor: "#57c654",
  pSize: "15px",
  pFont: "'Lora', serif",
  h1Size: "40px",
  h1Font: "'Montserrat', sans-serif"
};

class Root extends Component {
  render() {
    return (
      <ThemeProvider theme={mainTheme}>
        <Fragment>
          <Home />
          <Slider />
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default Root;
