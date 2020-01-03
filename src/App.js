import React from 'react';
import './App.css';
import SearchAppBar from './component/searchAppBar';
import {ThemeProvider} from '@material-ui/core';
import Theme from './theme';
import AnimesIndex from './component/index/animesIndex';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>
          <SearchAppBar />
        </Switch>
        <Switch>
          <Route exact path="/">
            <AnimesIndex />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
