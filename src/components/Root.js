import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

const mainTheme = {
  color: "mediumseagreen"
};

class Root extends Component {
  render() {
    return (
      <ThemeProvider theme={mainTheme}>
        <React.Fragment>
          <h1>Root</h1>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default Root;
