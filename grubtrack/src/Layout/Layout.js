import React, { Component } from 'react';
import faker from "faker";
import './Layout.scss';
import Sidebar from '../Components/Sidebar'
// import Switch from 'react-bootstrap/esm/Switch';
// import Login from '../Login/Login';
// import { Route } from 'react-router-dom';

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
      <div className="container is-fluid Layout">
        <div className="columns">
          <div className="column is-one-fifth">
            <Sidebar username={faker.name.firstName()}
              avatar={faker.image.avatar()}
              jobtitle={faker.name.jobTitle()} />
          </div>
          <div className="column Content">
            hello this is layout
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;