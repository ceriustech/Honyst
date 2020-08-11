import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import App from "./App";

// sets up basic global styles
const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

// setup basic theme object
// TODO: move this to another file once decided on
const theme = {};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <App />
    </>
  </ThemeProvider>,
  document.getElementById("root")
);
