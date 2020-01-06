import React from 'react';
import './App.css';
import SearchAppBar from './component/share/searchAppBar';
import {ThemeProvider} from '@material-ui/core';
import Theme from './theme';
import AnimesIndex from './component/index/animesIndex';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ArrowBack from './component/share/icon/arrowBack';
import Menu from './component/share/icon/menu';

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <SearchAppBar icon={<Menu />} />
            <AnimesIndex />
          </Route>
          <Route exact path="/animes/:id">
            <SearchAppBar icon={<ArrowBack />} />
            {/* <AnimeDetail /> */}
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
