import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { teal, orange } from "@material-ui/core/colors";
import { hot } from "react-hot-loader";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#52c7b8",
      main: "#009688",
      dark: "#00675b",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ffd95b",
      main: "#ffa726",
      dark: "#c77800",
      contrastText: "#000"
    },
    openTitle: teal["700"],
    protectedTitle: orange["700"],
    type: "light"
  },
  typography: {
    useNextVariants: true
  }
});

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <MainRouter />
    </MuiThemeProvider>
  </BrowserRouter>
);

export default hot(module)(App);
