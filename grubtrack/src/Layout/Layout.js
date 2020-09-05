import React, { Component } from 'react';
import './Layout.css';
import Switch from 'react-bootstrap/esm/Switch';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import { Route } from 'react-router-dom';

class Layout extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div>
        <div>
        </div>
        <Switch>
          <Route path="/" exact component={Login}/>
          {/* <Route path="/login"/> */}
        </Switch>
      </div>
    );
  }
}

export default Layout;