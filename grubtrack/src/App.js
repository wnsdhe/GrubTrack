import React from 'react';
import './App.css';
import Layout from './Layout/Layout';
import Login from './Login/Login';
import { Route, Router, Switch } from 'react-router-dom';
import history from './history';

function App() {
  return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/layout" exact component={Layout}/>
        </Switch>
      </Router>
  );
}

export default App;
