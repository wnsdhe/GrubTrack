import React, { Component } from 'react';
import './Dashboard.css';
import DashboardButton from '../SharedComponents/DashboardButton';
import Icon1 from '../SharedImages/turtle1.png';

class Dashboard extends Component {
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
    console.log("HEHLKJF:LKHSDL:FKJSD:LFKJSD:LJKf;lkSJ");
    return (
      <div>
        <div className="column box wunderback-layout has-text-centered">
          Placeholder for Some text
        </div>
        <div>THIS IS THE DASHBOARD
          <DashboardButton> <img alt="Icon1" className="dashboardIcon" src={Icon1} /> YourText1 </DashboardButton>
        </div>
      </div>
    );
  }
}

export default Dashboard;
