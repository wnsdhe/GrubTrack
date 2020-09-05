import React, { Component } from 'react';
import './Layout.css';
import Switch from 'react-bootstrap/esm/Switch';
import Dashboard from '../Dashboard/Dashboard';
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
          this is a layout
        </div>
        <Switch>
          <Route path="/" exact component={Dashboard}/>
          {/* <Route path="/login"/> */}
        </Switch>
      </div>
    );
  }
}

export default Layout;