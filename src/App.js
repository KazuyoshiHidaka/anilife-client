import React from "react";
import "./App.css";
import SearchAppBar from "./component/searchAppBar";
import { ThemeProvider, Container } from "@material-ui/core";
import { theme } from "./theme";
import AnimesIndex from "./component/index_page/animesIndex";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SearchAppBar />
      <Container>
        <AnimesIndex />
      </Container>
    </ThemeProvider>
  );
}

export default App;
