import React from "react";
import "./App.css";
import SearchAppBar from "./component/searchAppBar";
import { ThemeProvider, Grid } from "@material-ui/core";
import Theme from "./theme";
import AnimesIndex from "./component/index/animesIndex";

export default () => {
  return (
    <ThemeProvider theme={Theme}>
      <SearchAppBar />
      <Grid container justify="center">
        <Grid xs={8} sm={4} md={3} lg={2}>
          <AnimesIndex />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
