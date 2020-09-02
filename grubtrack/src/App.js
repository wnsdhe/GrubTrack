import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard/Dashboard';

class App extends Component {
  render () {
    return (
      <div>
        <Dashboard></Dashboard>
      </div>
    );
  }

}

export default App;
