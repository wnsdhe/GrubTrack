import React, { Component } from 'react';
import faker from "faker";
import './Layout.scss';
import Sidebar from '../Components/Sidebar'
import Dashboard from '../Dashboard/Dashboard';
import history from '../history';
import { Route, Router, Switch } from 'react-router-dom';

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
        {/* column wrapper */}
        <div className="columns">
          {/* side nav bar */}
          <div className="column is-one-fifth">
            <Sidebar username={faker.name.firstName()}
              avatar={faker.image.avatar()}
              jobtitle={faker.name.jobTitle()} />
          </div>
          <div className="column Content">
          {/* this is the header part */}
          <div className="hero-head">
            <nav className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <a href="https://www.wundergrubs.com/" className="navbar-item">
                    <img className="wunderlogo image" src="https://www.wundergrubs.com/uploads/7/3/8/6/73866685/editor/wg-newlogo-2020.jpg?1593719609" alt="Logo"></img>
                  </a>
                  <a role="button" className="navbar-burger" data-target="navbarMenuHeroC" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </a>
                </div>
                <div id="navbarMenuHeroC" className="navbar-menu">
                  <div className="navbar-end">
                    <a className="navbar-item" href="https://www.wundergrubs.com/">
                      Home
                    </a>
                    <a className="navbar-item" href="https://www.wundergrubs.com/">
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
            {/* <Router history={history}>
              <Switch>
                <Route path="/" exact component={Dashboard}/>
              </Switch>
            </Router> */}
            <Dashboard/>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;