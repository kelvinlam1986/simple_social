import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { hot } from "react-hot-loader";
import { theme } from "./theme";

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <MainRouter />
    </MuiThemeProvider>
  </BrowserRouter>
);

export default hot(module)(App);
