import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import Login from './Login/Login';

class App extends Component {
  render () {
    return (
      <div>
        <Login/>
      </div>
    );
  }

}

export default App;
